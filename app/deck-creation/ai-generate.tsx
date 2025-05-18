import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonText,
  Center,
  CheckCircleIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  HStack,
  Input,
  InputField,
  ScrollView,
  Spinner,
  Text,
  TextareaInput,
  VStack,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";

export default function AIDeckGenerator() {
  const [topic, setTopic] = useState("");
  const [prompt, setPrompt] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("intermediate");
  const [numberOfCards, setNumberOfCards] = useState("10");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationComplete, setGenerationComplete] = useState(false);

  const handleBackPress = () => {
    router.back();
  };

  const handleGenerateDeck = () => {
    if (!isFormValid()) return;

    setIsGenerating(true);

    // Simulate AI generation with a timeout
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationComplete(true);

      // In a real app, this would call an AI service to generate the deck
      console.log("Generating deck with:", {
        topic,
        prompt,
        difficultyLevel,
        numberOfCards,
      });
    }, 3000);
  };

  const handleViewGeneratedDeck = () => {
    // In a real app, this would navigate to the newly created deck
    router.replace("/flashcards");
  };

  const isFormValid = () => {
    return topic.trim() !== "" && numberOfCards !== "";
  };

  return (
    <ThemedView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <Box p={16} flex={1}>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            mb={16}
            pt={30}
          >
            <Button onPress={handleBackPress} variant="ghost">
              <Text>Back</Text>
            </Button>
            <Heading size="lg">AI Deck Generator</Heading>
            <Box width={40} /> {/* Empty box for alignment */}
          </HStack>

          {!generationComplete ? (
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <VStack space="xl" width="100%">
                <Box mb={8}>
                  <Heading size="md" mb={4}>
                    Generate Flashcards with AI
                  </Heading>
                  <Text>
                    Our AI will create a deck of flashcards based on your
                    specifications. Simply provide a topic and customize your
                    preferences below.
                  </Text>
                </Box>

                <FormControl isRequired mb={4}>
                  <FormControlLabel>
                    <FormControlLabelText>Topic</FormControlLabelText>
                  </FormControlLabel>
                  <Input>
                    <InputField
                      placeholder="e.g., AWS Lambda Functions"
                      value={topic}
                      onChangeText={setTopic}
                    />
                  </Input>
                </FormControl>

                <FormControl mb={4}>
                  <FormControlLabel>
                    <FormControlLabelText>
                      Specific Instructions (optional)
                    </FormControlLabelText>
                  </FormControlLabel>
                  <TextareaInput minHeight={100}>
                    <InputField
                      placeholder="e.g., Focus on best practices and common use cases"
                      value={prompt}
                      onChangeText={setPrompt}
                      multiline
                    />
                  </TextareaInput>
                </FormControl>

                <FormControl mb={4}>
                  <FormControlLabel>
                    <FormControlLabelText>
                      Difficulty Level
                    </FormControlLabelText>
                  </FormControlLabel>
                  <HStack space="sm">
                    {["beginner", "intermediate", "advanced"].map((level) => (
                      <Button
                        key={level}
                        flex={1}
                        variant={
                          difficultyLevel === level ? "solid" : "outline"
                        }
                        onPress={() => setDifficultyLevel(level)}
                      >
                        <ButtonText>
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </ButtonText>
                      </Button>
                    ))}
                  </HStack>
                </FormControl>

                <FormControl mb={4}>
                  <FormControlLabel>
                    <FormControlLabelText>Number of Cards</FormControlLabelText>
                  </FormControlLabel>
                  <HStack space="sm">
                    {["5", "10", "15", "20"].map((num) => (
                      <Button
                        key={num}
                        flex={1}
                        variant={numberOfCards === num ? "solid" : "outline"}
                        onPress={() => setNumberOfCards(num)}
                      >
                        <ButtonText>{num}</ButtonText>
                      </Button>
                    ))}
                  </HStack>
                </FormControl>

                <Box bg="$infoLight100" p={16} borderRadius={8} mb={4}>
                  <HStack alignItems="center" space="sm" mb={2}>
                    <AlertCircleIcon color="$infoLight700" />
                    <Text fontWeight="$medium" color="$infoLight700">
                      Important Note
                    </Text>
                  </HStack>
                  <Text size="sm" color="$infoLight700">
                    The AI-generated content should be reviewed for accuracy.
                    While our AI is trained on technical information, it may
                    occasionally generate incorrect information.
                  </Text>
                </Box>
              </VStack>
            </ScrollView>
          ) : (
            <Center flex={1}>
              <Box
                bg="$successLight100"
                p={24}
                borderRadius={16}
                width="100%"
                alignItems="center"
              >
                <CheckCircleIcon size="xl" color="$success600" mb={8} />
                <Heading size="lg" textAlign="center" mb={2}>
                  Generation Complete!
                </Heading>
                <Text textAlign="center" mb={16}>
                  Your flashcard deck has been successfully generated.
                </Text>
                <Text fontWeight="$medium" mb={2}>
                  Deck Details:
                </Text>
                <VStack space="xs" width="100%" mb={16}>
                  <HStack justifyContent="space-between">
                    <Text>Topic:</Text>
                    <Text fontWeight="$medium">{topic}</Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text>Number of Cards:</Text>
                    <Text fontWeight="$medium">{numberOfCards}</Text>
                  </HStack>
                  <HStack justifyContent="space-between">
                    <Text>Difficulty:</Text>
                    <Text fontWeight="$medium">
                      {difficultyLevel.charAt(0).toUpperCase() +
                        difficultyLevel.slice(1)}
                    </Text>
                  </HStack>
                </VStack>
                <Button
                  size="lg"
                  width="100%"
                  onPress={handleViewGeneratedDeck}
                >
                  <ButtonText>View Generated Deck</ButtonText>
                </Button>
              </Box>
            </Center>
          )}

          {!generationComplete && (
            <Box p={4} pb={Platform.OS === "ios" ? 20 : 4}>
              <Button
                onPress={handleGenerateDeck}
                size="lg"
                isDisabled={!isFormValid() || isGenerating}
              >
                {isGenerating ? (
                  <HStack space="sm" alignItems="center">
                    <Spinner color="$white" size="small" />
                    <ButtonText>Generating...</ButtonText>
                  </HStack>
                ) : (
                  <ButtonText>Generate Flashcards</ButtonText>
                )}
              </Button>
            </Box>
          )}
        </Box>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
});
