import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"
import Items from './components/Item'

import {
  nftmarketaddress, nftaddress
} from '../config'

import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

export default function MyAssets() {
  const [items, setItems] = useState([
    {name: "Jordan 4 Retro", description: "Originally released in 2006, the Air Jordan 4 Retro Lightning (2021) is one of the most renowned retro Jordan 4 colorways in Jordan Brand's catalog. It features a Tour Yellow Durabuck upper with black netted panels and dark grey eyelets. On the tongue, a black Jordan", image:"./airjordan.jpg"},
    {name: "adidas Yeezy Boost 350 V2", description: "Clay (Kids)", image:"./yeezy.jpg"}
  ])
  return (
    <div className="flex justify-center">
      <div className="p-4">
        <Items items={items} />
      </div>
    </div>
  )
}
