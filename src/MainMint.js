// import React from "react";
import { ethers } from "ethers";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import Config from "./Config.json";

const Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const MainMint = ({ accounts, setAccounts }) => {
  // const [mintAmount, setMintAmount] = React.useEffect(1);
  const isConnected = Boolean(accounts[0]);

  const handleGreet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(Address, Config.abi, signer);

      try {
        const response = await contract.greet();
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
    <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
      <Box width="520px">
        <div>
          <Text fontSize="48px" textShadow="0 5px #000000">
            Greeting
          </Text>
          <Text
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 2px 2px #000000"
          >
            greet hello
          </Text>
        </div>
      </Box>
      {isConnected ? (
        <Flex>
          <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="10px"
            onClick={handleGreet}
          >
            getGreet
          </Button>
        </Flex>
      ) : (
        <p>connected first</p>
      )}
    </Flex>
  );
};
