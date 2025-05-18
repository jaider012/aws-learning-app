import {
    Box,
    Button,
    ButtonText,
    Center,
    Divider,
    Heading,
    HStack,
    Progress,
    ProgressFilledTrack,
    Text,
    VStack,
} from '@gluestack-ui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

export default function StudySessionSummary() {
  const { deck, correct, incorrect, total } = useLocalSearchParams();
  
  const correctNum = parseInt(correct as string || '0', 10);
  const incorrectNum = parseInt(incorrect as string || '0', 10);
  const totalNum = parseInt(total as string || '0', 10);
  
  const percentage = totalNum > 0 ? Math.round((correctNum / totalNum) * 100) : 0;
  
  const getPerformanceText = () => {
    if (percentage >= 90) return 'Excellent!';
    if (percentage >= 75) return 'Great job!';
    if (percentage >= 60) return 'Good work!';
    if (percentage >= 40) return 'Keep practicing!';
    return 'More practice needed';
  };
  
  const handleBackToDashboard = () => {
    router.replace('/');
  };
  
  const handleReviewIncorrectCards = () => {
    // This would navigate to a review screen in a real app
    router.replace('/');
  };
  
  const handleRetryDeck = () => {
    router.replace({
      pathname: '/study-session',
      params: { deck }
    });
  };
  
  return (
    <ThemedView style={styles.container}>
      <Box p={16} flex={1}>
        <VStack space="2xl" flex={1} justifyContent="center" alignItems="center">
          <Heading size="xl" textAlign="center">{deck} Completed!</Heading>
          
          <Center my={40} width="100%">
            <Box width={200} height={200} borderRadius={100} borderWidth={6} borderColor="$primary200" position="relative" justifyContent="center" alignItems="center">
              <VStack alignItems="center">
                <Text size="5xl" fontWeight="$bold">{percentage}%</Text>
                <Text size="md" color="$secondary500">{getPerformanceText()}</Text>
              </VStack>
              <Box position="absolute" top={0} left={0} right={0}>
                <Progress value={percentage} size="lg" bg="transparent">
                  <ProgressFilledTrack bg="$primary500" />
                </Progress>
              </Box>
            </Box>
          </Center>
          
          <Box width="100%" bg="$backgroundCardLight" p={24} borderRadius={16}>
            <Heading size="md" mb={16}>Session Stats</Heading>
            
            <VStack space="lg">
              <HStack justifyContent="space-between">
                <Text>Total Cards</Text>
                <Text fontWeight="$medium">{totalNum}</Text>
              </HStack>
              
              <Divider />
              
              <HStack justifyContent="space-between">
                <Text>Correct Answers</Text>
                <Text fontWeight="$medium" color="$success600">{correctNum}</Text>
              </HStack>
              
              <HStack justifyContent="space-between">
                <Text>Incorrect Answers</Text>
                <Text fontWeight="$medium" color="$error600">{incorrectNum}</Text>
              </HStack>
              
              <Divider />
              
              <HStack justifyContent="space-between">
                <Text>Accuracy</Text>
                <Text fontWeight="$medium">{percentage}%</Text>
              </HStack>
              
              <HStack justifyContent="space-between">
                <Text>Time Spent</Text>
                <Text fontWeight="$medium">5m 23s</Text> {/* Mock time data */}
              </HStack>
            </VStack>
          </Box>
          
          <VStack space="md" width="100%" mt={16}>
            <Button onPress={handleBackToDashboard} size="lg">
              <ButtonText>Back to Dashboard</ButtonText>
            </Button>
            
            {incorrectNum > 0 && (
              <Button onPress={handleReviewIncorrectCards} variant="outline" size="lg">
                <ButtonText>Review Incorrect Cards</ButtonText>
              </Button>
            )}
            
            <Button onPress={handleRetryDeck} variant="outline" size="lg">
              <ButtonText>Retry Deck</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </Box>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 