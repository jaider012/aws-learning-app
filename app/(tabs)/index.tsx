import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
    Box,
    Button,
    ButtonText,
    Heading,
    HStack,
    Progress,
    ProgressFilledTrack,
    Text,
    VStack,
} from '@gluestack-ui/themed';

import { HelloWave } from '@/components/HelloWave';
import { ThemedView } from '@/components/ThemedView';

export default function DashboardScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Box p={16} mb={16}>
          <HStack alignItems="center" space="md">
            <HelloWave />
            <VStack>
              <Text size="sm" color="$secondary500">Welcome back</Text>
              <Heading size="xl">John Doe</Heading>
            </VStack>
          </HStack>
        </Box>

        <Box p={16} mb={16} bg="$backgroundCardLight" borderRadius={12}>
          <Heading size="md" mb={10}>Progress Overview</Heading>
          
          <VStack space="lg" mb={16}>
            <Box>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">AWS Solutions Architect</Text>
                <Text>65%</Text>
              </HStack>
              <Progress value={65} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
            
            <Box>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">AWS Developer</Text>
                <Text>42%</Text>
              </HStack>
              <Progress value={42} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
            
            <Box>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">AWS SysOps</Text>
                <Text>28%</Text>
              </HStack>
              <Progress value={28} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
          </VStack>

          <Link href="/analytics" asChild>
            <Button variant="outline" size="sm">
              <ButtonText>View Detailed Progress</ButtonText>
            </Button>
          </Link>
        </Box>

        <Box p={16} mb={16} bg="$backgroundCardLight" borderRadius={12}>
          <Heading size="md" mb={10}>Recent Flashcard Decks</Heading>
          
          <VStack space="md" mb={16}>
            <HStack justifyContent="space-between" p={10} bg="$backgroundCardLightHover" borderRadius={8}>
              <Text fontWeight="$medium">EC2 Essentials</Text>
              <Text>Last studied 2d ago</Text>
            </HStack>
            
            <HStack justifyContent="space-between" p={10} bg="$backgroundCardLightHover" borderRadius={8}>
              <Text fontWeight="$medium">S3 Storage Options</Text>
              <Text>Last studied 4d ago</Text>
            </HStack>
            
            <HStack justifyContent="space-between" p={10} bg="$backgroundCardLightHover" borderRadius={8}>
              <Text fontWeight="$medium">IAM Best Practices</Text>
              <Text>Last studied 1w ago</Text>
            </HStack>
          </VStack>

          <Link href="/flashcards" asChild>
            <Button variant="outline" size="sm">
              <ButtonText>View All Decks</ButtonText>
            </Button>
          </Link>
        </Box>

        <Box p={16} mb={16} bg="$backgroundCardLight" borderRadius={12}>
          <Heading size="md" mb={10}>Learning Paths</Heading>
          
          <VStack space="md" mb={16}>
            <Box p={10} bg="$backgroundCardLightHover" borderRadius={8}>
              <Text fontWeight="$medium">AWS Solutions Architect Associate</Text>
              <Text size="sm" color="$secondary500">13 modules • 65% complete</Text>
            </Box>
            
            <Box p={10} bg="$backgroundCardLightHover" borderRadius={8}>
              <Text fontWeight="$medium">AWS Developer Associate</Text>
              <Text size="sm" color="$secondary500">11 modules • 42% complete</Text>
            </Box>
          </VStack>

          <Link href="/learning-paths" asChild>
            <Button variant="outline" size="sm">
              <ButtonText>View All Paths</ButtonText>
            </Button>
          </Link>
        </Box>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 100,
  },
});
