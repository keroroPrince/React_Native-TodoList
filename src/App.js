import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {StatusBar} from 'react-native';
import Input from './components/Input';
import Task from './components/Task';
import {useWindowDimensions} from 'react-native';

const Container = styled.SafeAreaView`
    flex : 1;
    background-color : ${({theme}) => theme.background};
    align-items : center;
    justify-content : flex-start;
`;

const Title = styled.Text`
    font-size : 40px;
    font-weight : 600;
    color : ${({theme}) => theme.main};
    align-self : flex-start;
    margin : 10px 20px;
`;

const List = styled.ScrollView`
    flex : 1;
    width : ${({ width }) => width-100}px;
`;

const App = () => {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState({
        '1' : {id : '1', text : 'TEST1', completed : true},
        '2' : {id : '2', text : 'TEST2', completed : false},
        '3' : {id : '3', text : 'TEST3', completed : false},
    });
    const _addTask = () => {
        //alert(`Add ${newTask}`);
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID] : {id : ID, text:newTask, completed:false},
        };
        setTasks({...tasks, ...newTaskObject});
        setNewTask('');
    }

    const _handleTextChange = Text => {
        setNewTask(Text);
    }

    const _deleteTask = id => {
        const currentTasks = Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    }

    const _toggleTask = id => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];//toggling
        setTasks(currentTasks);
    }

    const _onBlur = () => {
        setNewTask('');
    }
    const _updateTask = item => {
        const currentTasks = Object.assign({}, tasks);
        currentTasks[item.id] = item;
        setTasks(currentTasks);
    }
    const width = useWindowDimensions().width;

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={theme.background}
                />
                <Title>TODO🧚🏻</Title>
                <Input 
                    placeholder="new task"
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                    onBlur={_onBlur}
                    />
                    <List width = {width}>
                        {Object.values(tasks)
                        .reverse()
                        .map(item => <Task 
                                        key={item.id} 
                                        item={item} 
                                        deleteTask={_deleteTask}
                                        toggleTask={_toggleTask}
                                        updateTask={_updateTask}
                                        />)
                        }
                    </List>
            </Container>
        </ThemeProvider>
    );
};

export default App;