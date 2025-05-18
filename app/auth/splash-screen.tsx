import { Center, Heading, Image, Spinner, Text, VStack } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import React, { useEffect } from 'react';

export default function SplashScreen() {
  useEffect(() => {
    // Simulate checking for user authentication
    const checkAuth = async () => {
      try {
        // TODO: Replace with actual auth check
        const isAuthenticated = false; // Mock value
        
        // Simulate a delay to show splash screen
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        if (isAuthenticated) {
          // If user is authenticated, go to the main app
          router.replace('/');
        } else {
          // If user is not authenticated, go to login
          router.replace('/auth/login');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        // If there's an error, default to login
        router.replace('/auth/login');
      }
    };
    
    checkAuth();
  }, []);
  
  return (
    <Center flex={1} bg="$backgroundLight100">
      <VStack space="lg" alignItems="center">
        <Image
          source={require('../../assets/images/aws-logo.png')}
          alt="AWS Learning"
          width={200}
          height={150}
          resizeMode="contain"
        />
        <Heading size="2xl" color="$primary500">
          AWS Learning
        </Heading>
        <Text color="$textLight500" mb={8}>
          Master AWS through spaced repetition
        </Text>
        <Spinner size="large" color="$primary500" />
      </VStack>
    </Center>
  );
} 