import {
    Box,
    Button,
    ButtonText,
    Heading,
    HStack,
    Icon,
    IconButton,
    Pressable,
    Progress,
    ProgressFilledTrack,
    ScrollView,
    Text,
    VStack
} from '@gluestack-ui/themed';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Check, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

// Mock flashcard data - would come from API/database in real app
const MOCK_FLASHCARDS = [
  {
    id: '1',
    question: 'What is Amazon EC2?',
    answer: 'Amazon Elastic Compute Cloud (EC2) is a web service that provides resizable compute capacity in the cloud.',
    options: [
      'Amazon Elastic Compute Cloud (EC2) is a web service that provides resizable compute capacity in the cloud.',
      'Amazon EC2 is a database service that provides flexible storage options.',
      'Amazon EC2 is a content delivery network for fast content distribution.',
      'Amazon EC2 is a messaging service for application integration.',
    ],
  },
  {
    id: '2',
    question: 'What is the primary benefit of using Amazon S3 Standard-IA storage class?',
    answer: 'Lower storage cost for infrequently accessed data with rapid access when needed.',
    options: [
      'Lowest storage cost for archive data with retrieval times from minutes to hours.',
      'Lowest storage cost with no minimum storage duration or retrieval fees.',
      'Lower storage cost for infrequently accessed data with rapid access when needed.',
      'Highest performance for frequently accessed data with millisecond access times.',
    ],
  },
  {
    id: '3',
    question: 'Which AWS service is used for creating and managing relational databases?',
    answer: 'Amazon RDS (Relational Database Service)',
    options: [
      'Amazon DynamoDB',
      'Amazon Redshift',
      'Amazon ElastiCache',
      'Amazon RDS (Relational Database Service)',
    ],
  },
];

export default function StudySession() {
  const { deck } = useLocalSearchParams();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  
  const currentCard = MOCK_FLASHCARDS[currentCardIndex];
  const progress = ((currentCardIndex + 1) / MOCK_FLASHCARDS.length) * 100;
  
  const handleOptionSelect = (index: number) => {
    if (isAnswerRevealed) return;
    
    setSelectedOptionIndex(index);
    setIsAnswerRevealed(true);
    
    // Check if answer is correct
    if (currentCard.options[index] === currentCard.answer) {
      setCorrectAnswers(prev => prev + 1);
    } else {
      setIncorrectAnswers(prev => prev + 1);
    }
  };
  
  const handleNextCard = () => {
    if (currentCardIndex < MOCK_FLASHCARDS.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsAnswerRevealed(false);
      setSelectedOptionIndex(null);
    } else {
      // End of deck - show summary screen
      router.push({
        pathname: '/study-session/summary',
        params: {
          deck,
          correct: correctAnswers.toString(),
          incorrect: incorrectAnswers.toString(),
          total: MOCK_FLASHCARDS.length.toString(),
        },
      });
    }
  };
  
  const handleBackPress = () => {
    router.back();
  };
  
  const isCorrectOption = (index: number) => {
    return currentCard.options[index] === currentCard.answer;
  };
  
  return (
    <ThemedView style={styles.container}>
      <Box p={16} pt={50}>
        <HStack justifyContent="space-between" alignItems="center" mb={16}>
          <IconButton 
            icon={<Icon as={ArrowLeft} size="lg" />}
            onPress={handleBackPress}
            variant="ghost"
          />
          <VStack alignItems="center">
            <Text fontWeight="$medium">{deck || 'Study Session'}</Text>
            <Text size="xs" color="$secondary500">Card {currentCardIndex + 1} of {MOCK_FLASHCARDS.length}</Text>
          </VStack>
          <Box width={40} /> {/* Empty box for alignment */}
        </HStack>
        
        <Progress value={progress} size="sm" mb={16}>
          <ProgressFilledTrack />
        </Progress>
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Box
            bg="$backgroundCardLight"
            p={24}
            borderRadius={16}
            width="100%"
            minHeight={200}
            mb={24}
          >
            <Heading size="lg" mb={16}>
              {currentCard.question}
            </Heading>
          </Box>
          
          <VStack space="md" width="100%">
            {currentCard.options.map((option, index) => (
              <Pressable
                key={index}
                onPress={() => handleOptionSelect(index)}
                disabled={isAnswerRevealed}
              >
                <Box
                  bg={
                    isAnswerRevealed
                      ? isCorrectOption(index)
                        ? '$success100'
                        : selectedOptionIndex === index
                        ? '$error100'
                        : '$backgroundCardLight'
                      : '$backgroundCardLight'
                  }
                  borderWidth={1}
                  borderColor={
                    isAnswerRevealed
                      ? isCorrectOption(index)
                        ? '$success500'
                        : selectedOptionIndex === index
                        ? '$error500'
                        : '$borderLight200'
                      : selectedOptionIndex === index
                      ? '$primary500'
                      : '$borderLight200'
                  }
                  p={16}
                  borderRadius={8}
                >
                  <HStack justifyContent="space-between" alignItems="center">
                    <Text
                      flex={1}
                      color={
                        isAnswerRevealed && isCorrectOption(index)
                          ? '$success700'
                          : isAnswerRevealed && selectedOptionIndex === index && !isCorrectOption(index)
                          ? '$error700'
                          : '$textLight900'
                      }
                    >
                      {option}
                    </Text>
                    {isAnswerRevealed && isCorrectOption(index) && (
                      <Box bg="$success500" borderRadius={50} p={2}>
                        <Icon as={Check} color="white" size="sm" />
                      </Box>
                    )}
                    {isAnswerRevealed && selectedOptionIndex === index && !isCorrectOption(index) && (
                      <Box bg="$error500" borderRadius={50} p={2}>
                        <Icon as={X} color="white" size="sm" />
                      </Box>
                    )}
                  </HStack>
                </Box>
              </Pressable>
            ))}
          </VStack>
        </ScrollView>
        
        {isAnswerRevealed && (
          <Button onPress={handleNextCard} size="lg" mt={8}>
            <ButtonText>
              {currentCardIndex < MOCK_FLASHCARDS.length - 1 ? 'Next Card' : 'Finish Session'}
            </ButtonText>
          </Button>
        )}
      </Box>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
}); 