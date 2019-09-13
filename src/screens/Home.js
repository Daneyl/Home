import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {
  SofaIcon,
  TVIcon,
  BathTubIcon,
  DiningIcon,
  BedIcon,
} from '../assets/Icons';
import NavigationService from '../../NavigationService';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="ROOMS"
        hasBack
        onPressBack={() => NavigationService.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewChild}
        style={styles.container}>
        <Card label="Great Room">
          <SofaIcon />
        </Card>
        <Card label="Media Room">
          <TVIcon />
        </Card>
        <Card label="Master Bathroom">
          <BathTubIcon />
        </Card>
        <Card label="Dining">
          <DiningIcon />
        </Card>
        <Card label="Master Bedroom">
          <BedIcon />
        </Card>
        <Card label="Great Room">
          <SofaIcon />
        </Card>
        <Card label="Media Room">
          <TVIcon />
        </Card>
        <Card label="Master Bathroom">
          <BathTubIcon />
        </Card>
        <Card label="Dining">
          <DiningIcon />
        </Card>
        <Card label="Master Bedroom">
          <BedIcon />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: 'transparent',
  },
  scrollViewChild: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'flex-start',
  },
});

export default Home;
