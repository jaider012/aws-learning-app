import {
    Box,
    Button,
    ButtonText,
    Center,
    Checkbox,
    CheckboxIcon,
    CheckboxIndicator,
    CheckboxLabel,
    CheckIcon,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Heading,
    HStack,
    Image,
    Input,
    InputField,
    LinkText,
    Pressable,
    Text,
    VStack,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';
import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = () => {
    // TODO: Add registration logic
    router.replace('/');
  };

  const navigateToLogin = () => {
    router.push('/auth/login');
  };

  return (
    <Center flex={1} padding={16} bg="$backgroundLight100">
      <Box width="100%" maxWidth={400}>
        <VStack space="md">
          <Center>
            <Image
              source={require('../../assets/images/aws-logo.png')}
              alt="AWS Learning"
              width={150}
              height={100}
              resizeMode="contain"
            />
            <Heading size="2xl" color="$primary500" marginTop={4}>
              Create Account
            </Heading>
            <Text size="sm" color="$textLight500" marginTop={2}>
              Start your AWS learning journey
            </Text>
          </Center>

          <FormControl marginTop={6}>
            <FormControlLabel>
              <FormControlLabelText>Full Name</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Enter your full name"
                value={name}
                onChangeText={setName}
              />
            </Input>
          </FormControl>

          <FormControl>
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
                placeholder="Create a password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </Input>
          </FormControl>

          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Confirm Password</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </Input>
          </FormControl>

          <FormControl>
            <HStack space="sm" alignItems="center">
              <Checkbox
                value="terms"
                isChecked={termsAccepted}
                onChange={setTermsAccepted}
                aria-label="Accept terms and conditions"
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  <Text size="sm">
                    I accept the Terms of Service and Privacy Policy
                  </Text>
                </CheckboxLabel>
              </Checkbox>
            </HStack>
          </FormControl>

          <Button 
            onPress={handleRegister} 
            size="lg" 
            marginTop={4}
            isDisabled={!termsAccepted || !name || !email || !password || password !== confirmPassword}
          >
            <ButtonText>Create Account</ButtonText>
          </Button>

          <Center marginTop={4}>
            <Pressable onPress={navigateToLogin}>
              <Text>
                Already have an account? <LinkText>Sign In</LinkText>
              </Text>
            </Pressable>
          </Center>
        </VStack>
      </Box>
    </Center>
  );
} 