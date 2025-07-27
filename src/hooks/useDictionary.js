import { useState } from 'react';
import { getWordDefinition } from '../services/dictionary';

export default function useDictionary() {
  const [popup, setPopup] = useState({
    visible: false,
    word: '',
    definition: '',
    position: { x: 0, y: 0 }
  });

  const showPopup = async (word, rect) => {
    try {
      const definition = await getWordDefinition(word);
      setPopup({
        visible: true,
        word,
        definition,
        position: {
          x: rect.left + window.scrollX,
          y: rect.top + window.scrollY - 50
        }
      });
    } catch (error) {
      console.error('Dictionary error:', error);
    }
  };

  const hidePopup = () => {
    setPopup(prev => ({ ...prev, visible: false }));
  };

  return { popup, showPopup, hidePopup };
}