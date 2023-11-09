import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import NearLogo from 'public/logo2.jpg';
import { useWallet } from '@/wallets/wallet-selector';

export const Navigation = () => {

  const { signedAccountId, logOut, logIn } = useWallet();
  const [action, setAction] = useState(() => { });
  const [label, setLabel] = useState('Loading...');

  useEffect(() => {
    if (signedAccountId) {
      setAction(() => logOut);
      setLabel(`Logout ${signedAccountId}`);
    } else {
      setAction(() => logIn);
      setLabel('Login');
    }
  }, [signedAccountId, logOut, logIn, setAction, setLabel]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link href="/" passHref legacyBehavior>
          <div className='flex flex-row items-center gap-4 font-bold'>
            <Image priority src={NearLogo} alt="NEAR" width="60" height="60" className="d-inline-block align-text-top" />
            <span>Neramind</span>
          </div>
        </Link>
        <div className='navbar-nav pt-1'>
          <button className="btn btn-secondary" onClick={action} > {label} </button>
        </div>
      </div>
    </nav>
  );
};