import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Button } from './_components/Button';
import { Food } from './_components/Food';
import Card from './_components/_food/Card';
import { Grid } from '@mui/material';
import {  StyleSheet,  Text,  SafeAreaView,  ScrollView,  StatusBar,} from 'react-native';
import { makeStyles } from '@mui/styles';
import { RecipePage } from './_components/_food/RecipePage';
import MultiActionAreaCard from './_components/_food/Card';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '50px',
    paddingRight: '20px'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Button></Button>}></Route>
          <Route path='/food' element={<Food/>}></Route>
          <Route path='/RecipePage' element={<RecipePage/>}></Route>
          
        </Routes>
      </BrowserRouter>
      {/*
      <h3> Meals </h3>
      <hr></hr>
      <Grid container spacing={4} className={classes.gridContainer}>
        <ScrollView horizontal={true} contentContainerStyle={{
          paddingLeft: 5,
          paddingRight: 5,
        }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
        </ScrollView>
      </Grid>

      <h3> Under 30 min </h3>
      <hr></hr>
      <Grid container spacing={4} className={classes.gridContainer}>
        <ScrollView horizontal={true} contentContainerStyle={{
          paddingLeft: 5,
          paddingRight: 5,
        }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
        </ScrollView>
      </Grid>

      <h3> Vegetarian </h3>
      <hr></hr>
      <hr></hr>
      <Grid container spacing={4} className={classes.gridContainer}>
        <ScrollView horizontal={true} contentContainerStyle={{
          paddingLeft: 5,
          paddingRight: 5,
        }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
        </ScrollView>
      </Grid> 
      */}
    </div>
    
  );
}

export default App;