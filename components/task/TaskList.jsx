import React, {useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import TaskSearchBar from './TaskSearchBar';
/**
 * Define TaskList, a componment of CS4050 project #4.
 */
// P2 Import AXIOS 
import axios from 'axios';
import styled from 'styled-components';

export default function TaskList() {
  const [inputLetters, setInputLetters] = useState('');
  // const [tasks, setTasks] = useState(window.cse4050models.taskListModel());
  const [tasks, setTasks] = useState([]);
  // const [taskTypes, setTaskTypes] = useState(window.cse4050models.taskTypeListModel());
  const [taskTypes, setTaskTypes] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchTaskTypes = async () => {
    try {
      const response = await axios.get('/api/task-types');
      setTaskTypes(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchTasks(); 
  }, []);  

  useEffect(() => {
    fetchTaskTypes(); 
  }, []);  

  const handledragover = (event) => {
    event.preventDefault();
  };

  const handledrop = (event) => {
    event.preventDefault();
    var task_id = event.dataTransfer.getData("task_id");
    if(event.target.classList.contains('cse4050-task-list')) {
      event.target.appendChild(document.getElementById(task_id));
    }
  };

  const handledrag = (event) => {
    event.dataTransfer.setData("task_id", event.target.attributes.id.value);
  };

  const handleSearchChange = (searchQuery) => {
    setInputLetters(searchQuery);
  };

  const getBorderColor = (typeId) => {
    const type = taskTypes.find((t) => t._id === typeId);
    return type ? type.color : 'transparent';
  };

  const GridContainer = styled(Container)`
    && {
      margin-top: 7px;
    }
  `;

  return (
    <Container disableGutters maxWidth="false" sx={{ px:1, py:1 }}>
      <TaskSearchBar onSearchChange={handleSearchChange} />
      <GridContainer disableGutters maxWidth="ld" component="main">
        <Grid container spacing={2} alignItems="flex-end" >
        {taskTypes?.map(type => (
          <Grid item xs={12} md={4} key={type.name+"-tasks"} className="new-tasks">
            <Card variant="outlined" sx={{ borderRadius:0,mb:1}}>
              <Typography sx={{px:2,py:1,fontWeight:500}}>{type.name}</Typography>
            </Card>
            <Stack
              id={type.name+"-tasks-stack"}
              type_id={type._id}
              droppable="true"
              onDragOver={handledragover}
              onDrop={handledrop}
              spacing={1}
              className="cse4050-task-list"
              sx={{
                height: 600,
              }}
            >
              {tasks?.filter(task => task.type_id === type._id && task.description.includes(inputLetters)).map(task => (
              <Card
                key={"task"+task._id}
                id={"task"+task._id}
                draggable="true"
                droppable="false"
                onDragStart={handledrag}
                variant="outlined"
                className="cse4050-task-task"
                sx={{ borderLeft: `3px solid ${getBorderColor(task.type_id)}` }}
              >
                <CardContent>
                  <Typography>{task.description}</Typography>
                </CardContent>
              </Card>
              ))}
            </Stack>
          </Grid>
          ))}
        </Grid>
      </GridContainer>
    </Container>
  );
}
