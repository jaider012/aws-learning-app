import {
    AddIcon,
    Box,
    Button,
    ButtonText,
    CloseIcon,
    Divider,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Heading,
    HStack,
    Icon,
    IconButton,
    Input,
    InputField,
    ScrollView,
    Text,
    TextareaInput,
    VStack,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";

interface Card {
  id: string;
  question: string;
  answer: string;
}

export default function DeckCreation() {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const [cards, setCards] = useState<Card[]>([
    { id: "1", question: "", answer: "" },
    { id: "2", question: "", answer: "" },
  ]);

  const handleAddCard = () => {
    const newId = (cards.length + 1).toString();
    setCards([...cards, { id: newId, question: "", answer: "" }]);
  };

  const handleRemoveCard = (id: string) => {
    if (cards.length <= 2) {
      // Don't allow fewer than 2 cards
      return;
    }
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleUpdateCard = (
    id: string,
    field: "question" | "answer",
    value: string
  ) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, [field]: value } : card))
    );
  };

  const handleSaveDeck = () => {
    // In a real app, this would save to a database
    console.log("Saving deck:", { deckName, deckDescription, cards });
    router.replace("/flashcards");
  };

  const handleBackPress = () => {
    router.back();
  };

  const isFormValid = () => {
    if (!deckName.trim()) return false;

    // Check if at least 2 cards have both question and answer
    const validCards = cards.filter(
      (card) => card.question.trim() && card.answer.trim()
    );
    return validCards.length >= 2;
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
            <IconButton
              icon={<Icon as={ArrowLeft} size="lg" />}
              onPress={handleBackPress}
              variant="ghost"
            />
            <Heading size="lg">Create New Deck</Heading>
            <Box width={40} /> {/* Empty box for alignment */}
          </HStack>

          <ScrollView contentContainerStyle={styles.scrollContent}>
            <VStack space="xl" width="100%">
              <FormControl isRequired mb={4}>
                <FormControlLabel>
                  <FormControlLabelText>Deck Name</FormControlLabelText>
                </FormControlLabel>
                <Input>
                  <InputField
                    placeholder="Enter a name for your flashcard deck"
                    value={deckName}
                    onChangeText={setDeckName}
                  />
                </Input>
              </FormControl>

              <FormControl mb={4}>
                <FormControlLabel>
                  <FormControlLabelText>
                    Description (optional)
                  </FormControlLabelText>
                </FormControlLabel>
                <TextareaInput minHeight={100}>
                  <InputField
                    placeholder="Describe what this deck covers"
                    value={deckDescription}
                    onChangeText={setDeckDescription}
                    multiline
                  />
                </TextareaInput>
              </FormControl>

              <Divider my={4} />

              <Heading size="md">Cards ({cards.length})</Heading>
              <Text size="sm" color="$secondary500">
                Create at least 2 cards for your deck. Each card needs both a
                question and answer.
              </Text>

              <VStack space="lg" width="100%" mt={4}>
                {cards.map((card, index) => (
                  <Box
                    key={card.id}
                    bg="$backgroundCardLight"
                    p={16}
                    borderRadius={8}
                  >
                    <HStack
                      justifyContent="space-between"
                      alignItems="center"
                      mb={8}
                    >
                      <Heading size="sm">Card {index + 1}</Heading>
                      <IconButton
                        icon={<CloseIcon size="sm" />}
                        variant="ghost"
                        size="sm"
                        onPress={() => handleRemoveCard(card.id)}
                        isDisabled={cards.length <= 2}
                      />
                    </HStack>

                    <FormControl isRequired mb={4}>
                      <FormControlLabel>
                        <FormControlLabelText>Question</FormControlLabelText>
                      </FormControlLabel>
                      <Input>
                        <InputField
                          placeholder="Enter question"
                          value={card.question}
                          onChangeText={(value) =>
                            handleUpdateCard(card.id, "question", value)
                          }
                        />
                      </Input>
                    </FormControl>

                    <FormControl isRequired>
                      <FormControlLabel>
                        <FormControlLabelText>Answer</FormControlLabelText>
                      </FormControlLabel>
                      <TextareaInput>
                        <InputField
                          placeholder="Enter answer"
                          value={card.answer}
                          onChangeText={(value) =>
                            handleUpdateCard(card.id, "answer", value)
                          }
                          multiline
                        />
                      </TextareaInput>
                    </FormControl>
                  </Box>
                ))}

                <Button
                  onPress={handleAddCard}
                  variant="outline"
                  size="md"
                  startIcon={<AddIcon />}
                >
                  <ButtonText>Add Card</ButtonText>
                </Button>
              </VStack>
            </VStack>
          </ScrollView>

          <Box p={4} pb={Platform.OS === "ios" ? 20 : 4}>
            <Button
              onPress={handleSaveDeck}
              size="lg"
              isDisabled={!isFormValid()}
            >
              <ButtonText>Create Deck</ButtonText>
            </Button>
          </Box>
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
