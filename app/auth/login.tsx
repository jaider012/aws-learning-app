import {
  Box,
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Image,
  Input,
  InputField,
  LinkText,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Add authentication logic
    router.replace("/");
  };

  const navigateToRegister = () => {
    router.push("/auth/register");
  };

  return (
    <Center flex={1} padding={16} bg="$backgroundLight100">
      <Box width="100%" maxWidth={400}>
        <VStack space="md">
          <Center>
            <Image
              source={require("../../assets/images/react-logo.png")}
              alt="AWS Learning"
              width={150}
              height={100}
              resizeMode="contain"
            />
            <Heading size="2xl" color="$primary500" marginTop={4}>
              AWS Learning
            </Heading>
            <Text size="sm" color="$textLight500" marginTop={2}>
              Master AWS with spaced repetition
            </Text>
          </Center>

          <FormControl marginTop={6}>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </Input>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </Input>
          </FormControl>

          <Button onPress={handleLogin} size="lg" marginTop={4}>
            <ButtonText>Sign In</ButtonText>
          </Button>

          <Center marginTop={4}>
            <Pressable onPress={navigateToRegister}>
              <Text>
                Don't have an account? <LinkText>Sign Up</LinkText>
              </Text>
            </Pressable>
          </Center>
        </VStack>
      </Box>
    </Center>
  );
}
