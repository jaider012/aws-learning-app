import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
    Box,
    Divider,
    Heading,
    HStack,
    Progress,
    ProgressFilledTrack,
    Text,
    VStack,
} from '@gluestack-ui/themed';

import { ThemedView } from '@/components/ThemedView';

export default function AnalyticsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Heading size="xl" mb={20}>Analytics</Heading>
        
        <Box p={16} mb={16} bg="$backgroundCardLight" borderRadius={12}>
          <Heading size="lg" mb={16}>Topic Mastery</Heading>
          
          <VStack space="lg">
            <Box>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">EC2 & Compute</Text>
                <Text>78%</Text>
              </HStack>
              <Progress value={78} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
            
            <Box>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">Storage Services</Text>
                <Text>65%</Text>
              </HStack>
              <Progress value={65} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
            
            <Box>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">Security & IAM</Text>
                <Text>82%</Text>
              </HStack>
              <Progress value={82} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
            
            <Box>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">Networking</Text>
                <Text>54%</Text>
              </HStack>
              <Progress value={54} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
            
            <Box>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">Database Services</Text>
                <Text>61%</Text>
              </HStack>
              <Progress value={61} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
            
            <Box>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">Serverless</Text>
                <Text>39%</Text>
              </HStack>
              <Progress value={39} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
          </VStack>
        </Box>
        
        <Box p={16} mb={16} bg="$backgroundCardLight" borderRadius={12}>
          <Heading size="lg" mb={16}>Certification Readiness</Heading>
          
          <VStack space="lg">
            <Box>
              <HStack justifyContent="space-between" alignItems="center" mb={8}>
                <VStack>
                  <Text fontWeight="$medium">AWS Solutions Architect Associate</Text>
                  <Text size="sm" color="$secondary500">Overall readiness</Text>
                </VStack>
                <Text size="xl" fontWeight="$bold">65%</Text>
              </HStack>
              
              <Progress value={65} size="lg" mb={16}>
                <ProgressFilledTrack />
              </Progress>
              
              <Text size="sm" mb={12}>Knowledge gap areas:</Text>
              <VStack space="xs" mb={8}>
                <HStack alignItems="center" space="sm">
                  <Box w={3} h={3} borderRadius={50} bg="$error600" />
                  <Text size="sm">VPC Advanced Configurations</Text>
                </HStack>
                <HStack alignItems="center" space="sm">
                  <Box w={3} h={3} borderRadius={50} bg="$error600" />
                  <Text size="sm">Route 53 Routing Policies</Text>
                </HStack>
                <HStack alignItems="center" space="sm">
                  <Box w={3} h={3} borderRadius={50} bg="$warning500" />
                  <Text size="sm">Aurora Database Features</Text>
                </HStack>
              </VStack>
            </Box>
            
            <Divider my={8} />
            
            <Box>
              <HStack justifyContent="space-between" alignItems="center" mb={8}>
                <VStack>
                  <Text fontWeight="$medium">AWS Developer Associate</Text>
                  <Text size="sm" color="$secondary500">Overall readiness</Text>
                </VStack>
                <Text size="xl" fontWeight="$bold">42%</Text>
              </HStack>
              
              <Progress value={42} size="lg" mb={16}>
                <ProgressFilledTrack />
              </Progress>
              
              <Text size="sm" mb={12}>Knowledge gap areas:</Text>
              <VStack space="xs" mb={8}>
                <HStack alignItems="center" space="sm">
                  <Box w={3} h={3} borderRadius={50} bg="$error600" />
                  <Text size="sm">CI/CD Pipeline Implementation</Text>
                </HStack>
                <HStack alignItems="center" space="sm">
                  <Box w={3} h={3} borderRadius={50} bg="$error600" />
                  <Text size="sm">AWS CDK Deployment</Text>
                </HStack>
                <HStack alignItems="center" space="sm">
                  <Box w={3} h={3} borderRadius={50} bg="$error600" />
                  <Text size="sm">Lambda Optimization Techniques</Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Box>
        
        <Box p={16} mb={16} bg="$backgroundCardLight" borderRadius={12}>
          <Heading size="lg" mb={16}>Study Session History</Heading>
          
          <VStack space="md">
            <Box p={10} bg="$backgroundCardLightHover" borderRadius={8}>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">EC2 Essentials</Text>
                <Text>Today, 10:30 AM</Text>
              </HStack>
              <HStack>
                <Text size="sm" color="$success600">18 correct</Text>
                <Text size="sm" mx={2}>•</Text>
                <Text size="sm" color="$error600">4 incorrect</Text>
                <Text size="sm" mx={2}>•</Text>
                <Text size="sm">82% accuracy</Text>
              </HStack>
            </Box>
            
            <Box p={10} bg="$backgroundCardLightHover" borderRadius={8}>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">IAM Best Practices</Text>
                <Text>Yesterday, 2:15 PM</Text>
              </HStack>
              <HStack>
                <Text size="sm" color="$success600">12 correct</Text>
                <Text size="sm" mx={2}>•</Text>
                <Text size="sm" color="$error600">3 incorrect</Text>
                <Text size="sm" mx={2}>•</Text>
                <Text size="sm">80% accuracy</Text>
              </HStack>
            </Box>
            
            <Box p={10} bg="$backgroundCardLightHover" borderRadius={8}>
              <HStack justifyContent="space-between" mb={4}>
                <Text fontWeight="$medium">S3 Storage Options</Text>
                <Text>Jul 20, 9:45 AM</Text>
              </HStack>
              <HStack>
                <Text size="sm" color="$success600">20 correct</Text>
                <Text size="sm" mx={2}>•</Text>
                <Text size="sm" color="$error600">8 incorrect</Text>
                <Text size="sm" mx={2}>•</Text>
                <Text size="sm">71% accuracy</Text>
              </HStack>
            </Box>
          </VStack>
        </Box>
        
        <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
          <Heading size="lg" mb={16}>AI Recommendations</Heading>
          
          <VStack space="lg">
            <Box p={12} bg="$backgroundCardLightHover" borderRadius={8}>
              <Text fontWeight="$medium" mb={4}>Focus on VPC Networking</Text>
              <Text size="sm">
                Based on your recent study sessions, we recommend focusing on VPC networking concepts, particularly 
                subnet design and route tables, to improve your Solutions Architect readiness.
              </Text>
            </Box>
            
            <Box p={12} bg="$backgroundCardLightHover" borderRadius={8}>
              <Text fontWeight="$medium" mb={4}>Review Route 53 Routing</Text>
              <Text size="sm">
                Your performance on Route 53 questions suggests this is a knowledge gap. We recommend revisiting 
                routing policies, especially weighted and latency-based routing.
              </Text>
            </Box>
            
            <Box p={12} bg="$backgroundCardLightHover" borderRadius={8}>
              <Text fontWeight="$medium" mb={4}>Try Lambda Practice Questions</Text>
              <Text size="sm">
                To improve your Developer Associate readiness, we recommend practicing more Lambda function optimization 
                questions, focusing on memory allocation and concurrency settings.
              </Text>
            </Box>
          </VStack>
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