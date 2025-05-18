import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
    Box,
    Button,
    ButtonText,
    Divider,
    Heading,
    HStack,
    Progress,
    ProgressFilledTrack,
    Text,
    VStack,
} from '@gluestack-ui/themed';

import { ThemedView } from '@/components/ThemedView';

export default function LearningPathsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Heading size="xl" mb={20}>Learning Paths</Heading>
        
        <Heading size="lg" mb={16}>AWS Certification Paths</Heading>
        
        <VStack space="lg" mb={30}>
          <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
            <HStack mb={8} justifyContent="space-between" alignItems="center">
              <Heading size="md">Solutions Architect Associate</Heading>
              <Text>65%</Text>
            </HStack>
            
            <Progress value={65} size="md" mb={12}>
              <ProgressFilledTrack />
            </Progress>
            
            <Text size="sm" color="$secondary500" mb={12}>
              Learn how to design distributed systems and build solutions using AWS services.
            </Text>
            
            <HStack space="sm" mb={16}>
              <Box p={8} bg="$backgroundCardLightHover" borderRadius={8}>
                <Text size="xs">13 modules</Text>
              </Box>
              <Box p={8} bg="$backgroundCardLightHover" borderRadius={8}>
                <Text size="xs">8 labs</Text>
              </Box>
              <Box p={8} bg="$backgroundCardLightHover" borderRadius={8}>
                <Text size="xs">4 assessments</Text>
              </Box>
            </HStack>
            
            <Divider mb={16} />
            
            <HStack space="sm">
              <Link href="/learning-paths/aws-solutions-architect" asChild>
                <Button flexGrow={1}>
                  <ButtonText>Continue Learning</ButtonText>
                </Button>
              </Link>
            </HStack>
          </Box>
          
          <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
            <HStack mb={8} justifyContent="space-between" alignItems="center">
              <Heading size="md">Developer Associate</Heading>
              <Text>42%</Text>
            </HStack>
            
            <Progress value={42} size="md" mb={12}>
              <ProgressFilledTrack />
            </Progress>
            
            <Text size="sm" color="$secondary500" mb={12}>
              Learn how to develop, deploy and debug cloud-based applications using AWS.
            </Text>
            
            <HStack space="sm" mb={16}>
              <Box p={8} bg="$backgroundCardLightHover" borderRadius={8}>
                <Text size="xs">11 modules</Text>
              </Box>
              <Box p={8} bg="$backgroundCardLightHover" borderRadius={8}>
                <Text size="xs">6 labs</Text>
              </Box>
              <Box p={8} bg="$backgroundCardLightHover" borderRadius={8}>
                <Text size="xs">3 assessments</Text>
              </Box>
            </HStack>
            
            <Divider mb={16} />
            
            <HStack space="sm">
              <Link href="/learning-paths/aws-developer" asChild>
                <Button flexGrow={1}>
                  <ButtonText>Continue Learning</ButtonText>
                </Button>
              </Link>
            </HStack>
          </Box>
          
          <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
            <HStack mb={8} justifyContent="space-between" alignItems="center">
              <Heading size="md">SysOps Administrator</Heading>
              <Text>28%</Text>
            </HStack>
            
            <Progress value={28} size="md" mb={12}>
              <ProgressFilledTrack />
            </Progress>
            
            <Text size="sm" color="$secondary500" mb={12}>
              Learn how to deploy, manage, and operate scalable systems on AWS.
            </Text>
            
            <HStack space="sm" mb={16}>
              <Box p={8} bg="$backgroundCardLightHover" borderRadius={8}>
                <Text size="xs">12 modules</Text>
              </Box>
              <Box p={8} bg="$backgroundCardLightHover" borderRadius={8}>
                <Text size="xs">7 labs</Text>
              </Box>
              <Box p={8} bg="$backgroundCardLightHover" borderRadius={8}>
                <Text size="xs">4 assessments</Text>
              </Box>
            </HStack>
            
            <Divider mb={16} />
            
            <HStack space="sm">
              <Link href="/learning-paths/aws-sysops" asChild>
                <Button flexGrow={1}>
                  <ButtonText>Continue Learning</ButtonText>
                </Button>
              </Link>
            </HStack>
          </Box>
        </VStack>
        
        <Heading size="lg" mb={16}>Custom Learning Paths</Heading>
        
        <VStack space="md" mb={16}>
          <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
            <Heading size="md" mb={8}>Serverless Applications</Heading>
            <Text size="sm" color="$secondary500" mb={16}>
              Custom learning path for building serverless applications using AWS Lambda, API Gateway, and DynamoDB.
            </Text>
            
            <HStack space="sm">
              <Link href="/learning-paths/custom/serverless" asChild>
                <Button variant="outline" flexGrow={1}>
                  <ButtonText>View Path</ButtonText>
                </Button>
              </Link>
            </HStack>
          </Box>
          
          <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
            <Heading size="md" mb={8}>Containerization on AWS</Heading>
            <Text size="sm" color="$secondary500" mb={16}>
              Custom learning path for deploying containerized applications using ECS, ECR, and EKS.
            </Text>
            
            <HStack space="sm">
              <Link href="/learning-paths/custom/containers" asChild>
                <Button variant="outline" flexGrow={1}>
                  <ButtonText>View Path</ButtonText>
                </Button>
              </Link>
            </HStack>
          </Box>
        </VStack>
        
        <Link href="/learning-paths/create" asChild>
          <Button mb={16}>
            <ButtonText>Create Custom Path</ButtonText>
          </Button>
        </Link>
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