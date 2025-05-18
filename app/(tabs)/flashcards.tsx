import { Link } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
    Box,
    Button,
    ButtonText,
    Heading,
    HStack,
    Tabs,
    TabsTab,
    TabsTabList,
    TabsTabPanel,
    TabsTabPanels,
    Text,
    VStack,
} from '@gluestack-ui/themed';

import { ThemedView } from '@/components/ThemedView';

export default function FlashcardsScreen() {
  const [currentTab, setCurrentTab] = useState<string>('prebuilt');

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Heading size="xl" mb={20}>Flashcard Decks</Heading>
        
        <Tabs value={currentTab} onChange={(value: string) => setCurrentTab(value)}>
          <TabsTabList>
            <TabsTab value="prebuilt">
              <Text>Pre-built</Text>
            </TabsTab>
            <TabsTab value="user">
              <Text>Your Decks</Text>
            </TabsTab>
            <TabsTab value="ai">
              <Text>AI-Generated</Text>
            </TabsTab>
          </TabsTabList>
          
          <TabsTabPanels mt={16}>
            <TabsTabPanel value="prebuilt">
              <VStack space="md" mb={16}>
                <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
                  <HStack justifyContent="space-between" alignItems="center" mb={8}>
                    <Heading size="md">EC2 Essentials</Heading>
                    <Text>32 cards</Text>
                  </HStack>
                  
                  <Text size="sm" color="$secondary500" mb={16}>
                    Core concepts and features of Amazon EC2 instances, including instance types, AMIs, and pricing models.
                  </Text>
                  
                  <HStack space="sm">
                    <Link href="/study-session?deck=ec2-essentials" asChild>
                      <Button flexGrow={1}>
                        <ButtonText>Start Study Session</ButtonText>
                      </Button>
                    </Link>
                    <Link href="/flashcards/ec2-essentials" asChild>
                      <Button variant="outline" flexGrow={1}>
                        <ButtonText>View Deck</ButtonText>
                      </Button>
                    </Link>
                  </HStack>
                </Box>
                
                <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
                  <HStack justifyContent="space-between" alignItems="center" mb={8}>
                    <Heading size="md">S3 Storage Options</Heading>
                    <Text>28 cards</Text>
                  </HStack>
                  
                  <Text size="sm" color="$secondary500" mb={16}>
                    Amazon S3 storage classes, lifecycle policies, and best practices for cost optimization.
                  </Text>
                  
                  <HStack space="sm">
                    <Link href="/study-session?deck=s3-storage" asChild>
                      <Button flexGrow={1}>
                        <ButtonText>Start Study Session</ButtonText>
                      </Button>
                    </Link>
                    <Link href="/flashcards/s3-storage" asChild>
                      <Button variant="outline" flexGrow={1}>
                        <ButtonText>View Deck</ButtonText>
                      </Button>
                    </Link>
                  </HStack>
                </Box>
                
                <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
                  <HStack justifyContent="space-between" alignItems="center" mb={8}>
                    <Heading size="md">IAM Best Practices</Heading>
                    <Text>24 cards</Text>
                  </HStack>
                  
                  <Text size="sm" color="$secondary500" mb={16}>
                    Identity and Access Management concepts, including policies, roles, and security best practices.
                  </Text>
                  
                  <HStack space="sm">
                    <Link href="/study-session?deck=iam-best-practices" asChild>
                      <Button flexGrow={1}>
                        <ButtonText>Start Study Session</ButtonText>
                      </Button>
                    </Link>
                    <Link href="/flashcards/iam-best-practices" asChild>
                      <Button variant="outline" flexGrow={1}>
                        <ButtonText>View Deck</ButtonText>
                      </Button>
                    </Link>
                  </HStack>
                </Box>
              </VStack>
            </TabsTabPanel>
            
            <TabsTabPanel value="user">
              <VStack space="md" mb={16}>
                <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
                  <HStack justifyContent="space-between" alignItems="center" mb={8}>
                    <Heading size="md">AWS CLI Commands</Heading>
                    <Text>18 cards</Text>
                  </HStack>
                  
                  <Text size="sm" color="$secondary500" mb={16}>
                    Common AWS CLI commands for everyday operations. Created by you on May 15, 2024.
                  </Text>
                  
                  <HStack space="sm">
                    <Link href="/study-session?deck=aws-cli-commands" asChild>
                      <Button flexGrow={1}>
                        <ButtonText>Start Study Session</ButtonText>
                      </Button>
                    </Link>
                    <Link href="/flashcards/aws-cli-commands" asChild>
                      <Button variant="outline" flexGrow={1}>
                        <ButtonText>View Deck</ButtonText>
                      </Button>
                    </Link>
                  </HStack>
                </Box>
                
                <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
                  <HStack justifyContent="space-between" alignItems="center" mb={8}>
                    <Heading size="md">Database Services</Heading>
                    <Text>15 cards</Text>
                  </HStack>
                  
                  <Text size="sm" color="$secondary500" mb={16}>
                    Your notes on RDS, DynamoDB, and other AWS database services. Created by you on April 28, 2024.
                  </Text>
                  
                  <HStack space="sm">
                    <Link href="/study-session?deck=database-services" asChild>
                      <Button flexGrow={1}>
                        <ButtonText>Start Study Session</ButtonText>
                      </Button>
                    </Link>
                    <Link href="/flashcards/database-services" asChild>
                      <Button variant="outline" flexGrow={1}>
                        <ButtonText>View Deck</ButtonText>
                      </Button>
                    </Link>
                  </HStack>
                </Box>
              </VStack>
              
              <Link href="/deck-creation" asChild>
                <Button mb={16}>
                  <ButtonText>Create New Deck</ButtonText>
                </Button>
              </Link>
            </TabsTabPanel>
            
            <TabsTabPanel value="ai">
              <VStack space="md" mb={16}>
                <Box p={16} bg="$backgroundCardLight" borderRadius={12}>
                  <HStack justifyContent="space-between" alignItems="center" mb={8}>
                    <Heading size="md">Lambda Functions</Heading>
                    <Text>22 cards</Text>
                  </HStack>
                  
                  <Text size="sm" color="$secondary500" mb={16}>
                    AI-generated flashcards about AWS Lambda based on AWS documentation. Generated on May 20, 2024.
                  </Text>
                  
                  <HStack space="sm">
                    <Link href="/study-session?deck=lambda-functions" asChild>
                      <Button flexGrow={1}>
                        <ButtonText>Start Study Session</ButtonText>
                      </Button>
                    </Link>
                    <Link href="/flashcards/lambda-functions" asChild>
                      <Button variant="outline" flexGrow={1}>
                        <ButtonText>View Deck</ButtonText>
                      </Button>
                    </Link>
                  </HStack>
                </Box>
              </VStack>
              
              <Link href="/deck-creation/ai-generate" asChild>
                <Button mb={16}>
                  <ButtonText>Generate AI Deck</ButtonText>
                </Button>
              </Link>
            </TabsTabPanel>
          </TabsTabPanels>
        </Tabs>
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