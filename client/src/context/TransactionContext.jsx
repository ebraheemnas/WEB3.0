import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers'; 

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);


        return transactionsContract;

    }
    
    export const TransactionsProvider = ({ children }) => {


        const [currentAccount, setcurrentAccount] = useState('');
        const [formData, setformData] = useState({addressTo: '', amount:'', keyword:'', message:'' });
        const [isLoading, setisLoading] = useState(false);
        const [transacionCount, settransactionCount] = useState(localStorage.getItem('transactionCount'));





        const handleChange = (e, name) => {
            setformData ((prevState) => ({...prevState, [name]: e.target.value})); 
        }



        //fist const 

        const checkIfWalletIsConnected = async () => {

            try {

                if (!ethereum) return alert ("Please install Metamask.\nWithout installing Metamaske you will not be able to track your Product!"); // fi 7alte hoon lazim tkon t2ra el anleting 3shan tshtrek bl programm 

                const accounts = await ethereum.request({method: 'eth_accounts'});


                if(accounts.length){
                    setcurrentAccount(accounts[0]);

                    // getAllTransactions();
            } 
            
            else{
                console.log('no accounts found'); 
            }

                
            } catch (error) {

                console.log(error);

                throw new Error ("No Ethereum object!");
            }

           

        }





        //secound cosnt

        const connectWallet = async () => {
            try {

                if (!ethereum) return alert ("Please install Metamask");
                
                const accounts = await ethereum.request({method: 'eth_requestAccounts'});

                setcurrentAccount(accounts[0]);
                
            } catch (error) {

                console.log(error);

                throw new Error ("No Ethereum object!")
                
            }
        }



        // third const 


        const sendTransaction = async () =>{
            try {

                if (!ethereum) return alert ("Please install Metamask");

                const {addressTo, amount, keyword, message} = formData;
                const transactionsContract = getEthereumContract();
                const parsedAmount = ethers.utils.parseEther(amount);

                await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [{
                        from: currentAccount,
                        to: addressTo,
                        gas: '0x5208', // hada el rakem ho hexa equals to 21000 y3ne 2100 GWEI
                        value: parsedAmount._hex,
                    }]
                });

               const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, keyword, message); 

               setisLoading(true); 
               console.log(`Loading - ${transactionHash.hash}`);

               await transactionHash.wait();

               setisLoading(false); 
               console.log(`Success - ${transactionHash.hash}`);


               const transactionCount = await transactionsContract.gettransactionCount();

               settransactionCount(transacionCount.toNumber());



                
            } catch (error) {

                console.log(error);

                throw new Error ("No Ethereum object!")


                
            }
        }




        useEffect(() => {
            checkIfWalletIsConnected();

        },[]);
        
        
    
        
        return(

            <TransactionContext.Provider value ={{ connectWallet, currentAccount, formData, setformData, handleChange, sendTransaction }}>

                {children}

            </TransactionContext.Provider>
        );
    }
       
        