"use client"
import Image from 'next/image';
import styles from './app.module.css';
import { DocsCard, HelloComponentsCard, HelloNearCard } from '@/components/cards';
import NearLogo from 'public/logo2.jpg';
import { useState } from 'react';

import { NetworkId, PaymentContract } from '@/config';

import { genStories, genComic } from '@/services';
import { Progress } from '@/components/Progress';

const CONTRACT = PaymentContract[NetworkId];

export default function Home() {
  // const { signedAccountId, viewMethod, callMethod } = useWallet();

  const [textInput, setTextInput] = useState("");
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState("");
  const [comicImg, setComicImg] = useState("");
  const [genComics, setGenComicPages] = useState({});
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    try {
      setLoading(true);
      const result = await genStories(textInput);
      setLoading(false);
      setStories(result.stories)
    } catch (error) {
      setLoading(false);
    }
  };

  const selectStory = async (story) => {
    console.log(story);
    setSelectedStory(story);
  };

  const generateComic = async () => {
    try {
      setLoading(true);
      const res = await genComic(selectedStory);
      setLoading(false);
      setComicImg(res?.ipfs);
      setGenComicPages({
        ...genComics,
        ...{
          story: selectedStory,
          img: res?.ipfs
        }
      });
    } catch (error) {
      setLoading(false);
    }

  };

  return (
    <>
      <Progress loading={loading} />
      <main className={styles.main + " flex flex-column items-center justify-center gap-10" + (loading ? " pointer-events-none opacity-40" : "")}>
        <div className='flex flex-column gap-10 w-full items-center'>
          <div className="flex flex-row gap-4 items-center">
            <Image
              className={styles.logo}
              src={NearLogo}
              alt="Next.js Logo"
              width={110 * 1.5}
              height={28 * 1.5}
              priority
            />
            <div>
              <h3 className="text-black font-bold text-2xl">Neramind</h3>
              <h3 className="text-black font-bold text-xl">Bring your stories to life</h3>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center w-full gap-4">
            <input className="form-control form-control-lg w-3/4"
              type="text"
              placeholder="Generate story ideas!"
              aria-label=".form-control-lg example"
              onChange={(e) => setTextInput(e.target.value)}
            />

            <button type="button"
              className="btn btn-success text-white bg-green-700"
              onClick={generate}
            >
              Generate
            </button>
          </div>
        </div>

        {stories.length > 0 ?
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Story Idea</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stories.map((k, i) =>
                <tr key={i}>
                  <td>{k}</td>
                  <td>
                    <button className='btn btn-success' onClick={() => selectStory(k)}>Select Story</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          : ""}

        {selectedStory ? <>
          <h4 className='font-bold text-2xl'>Selected Story</h4>

          <div className='flex flex-row gap-10 items-start'>
            <div className="card">
              <div className="card-body">
                <p>{selectedStory}</p>
              </div>
              <div class="card-footer">
                <button className='btn btn-success' onClick={() => generateComic()}>Generate Comic</button>
              </div>
            </div>

            {comicImg && <img className='w-1/2' src={comicImg} />}
          </div>



        </> : ''}

      </main>
    </>
  );
}
