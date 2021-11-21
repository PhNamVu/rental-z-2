import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Box, Text, VStack, Image, Button } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { AuthStackParamList } from "../types";

const LandingScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthStackParamList, "Landing">>();
  return (
    <VStack flex={1}>
      <Image
        w="100%"
        h="68%"
        source={require("../assets/images/landing.jpg")}
        alt="landing pic"
      />
      <Box mt={5} ml={5}>
        <Text fontSize="3xl" fontWeight="bold">
          RentalZ
        </Text>
        <Text mt={5} fontSize="lg" color="gray.500">
          Best option for your next rental !
        </Text>
        <Text fontSize="lg" color="gray.500"></Text>
      </Box>
      <Box d="flex" flexDirection="row" justifyContent="flex-end" mt={5} mr={5}>
        <Button
          bg="black"
          size="sm"
          borderRadius={50}
          //TODO: change back to replace later
          onPress={() => navigation.navigate("TabLogin")}
        >
          <AntDesign name="right" size={24} color="white" />
        </Button>
      </Box>
    </VStack>
  );
};

export default LandingScreen;
