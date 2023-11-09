import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { utils } from 'near-api-js'

import NearLogo from 'public/logo2.jpg';
import { useWallet } from '@/wallets/wallet-selector';
import { NetworkId, DonationContract } from '@/config';

const CONTRACT = DonationContract[NetworkId];

export const Navigation = () => {

  const { signedAccountId, logOut, logIn, callMethod } = useWallet();
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (signedAccountId) {
      setAction(() => logOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => logIn);
      setLabel('Login');
    }
  }, [signedAccountId, logOut, logIn, setAction, setLabel]);

  const donate = async () => {
    // await callMethod(CONTRACT, 'donate', deposit);
    let deposit = utils.format.parseNearAmount(amount.toString())
    console.log(deposit)
    let response = await callMethod(
      CONTRACT,
      "donate",
      deposit
    )
    // let response = await callMethod({
    //   contractId: CONTRACT,
    //   method: "donate",
    //   deposit
    // })
    // console.log(response)
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link href="/" passHref legacyBehavior>
          <div className='flex flex-row items-center gap-4 font-bold'>
            <Image priority src={NearLogo} alt="NEAR" width="60" height="60" className="d-inline-block align-text-top" />
            <span>Neramind</span>
          </div>
        </Link>
        <div className='navbar-nav pt-1 flex flex-row gap-4'>
          <input className="form-control form-control-lg w-3/4"
            type="text"
            value={amount}
            placeholder="Donation Amount"
            aria-label=".form-control-lg example"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="btn btn-success" onClick={donate} > Donate with Near </button>
          <button className="btn btn-secondary" onClick={action} > {label} </button>
        </div>
      </div>
    </nav>
  );
};