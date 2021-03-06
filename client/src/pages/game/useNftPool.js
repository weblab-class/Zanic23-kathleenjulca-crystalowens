
import { getRandomNFT } from "../../services/nft.js";
import React, { useEffect, useState } from "react";

function preCacheImg(img) {
    var img = new Image();
    img.onload = function() {}
    img.src = img;
}


async function fillPool(nftPool){
    return setInterval(async () => {
        if(nftPool.length <= 20){
            //thisll go over 20, cause intervals will keep getting called 
            //even after nft is made. this doenst matter tho...
            try {
                const nft = await getRandomNFT();
                if(nftPool.length <= 20){
                    preCacheImg(nft.image);
                    nftPool.push(nft);
                }
            }
            catch(err){
                console.log('Waiting for backend to become available to send nfts.');
            }
        }
    }, 300);
}

async function waitForElement(array){
    return new Promise((resolve, reject) => {
        const interval = setInterval(()=> {
            if(array.length > 0){
                clearInterval(interval);
                resolve();
            }
        }, 200);
    });
}

function useNftPool(){
    const [nftPool, setNftPool] = useState([]);
    useEffect(() => {
        const interval = fillPool(nftPool);
        return () => clearInterval(interval);
    }, []);
    return async function getNft() {
        await waitForElement(nftPool); //might be bug. interval not cleared on rerender
        return nftPool.pop();
    };
}

export default useNftPool;