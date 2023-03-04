import { addDoc, collection } from '@firebase/firestore';
import { firestore } from '../firebase';
export const handleSubmit = testdata => {
  const ref = collection(firestore, 'test_data'); // Firebase creates this automatically
  let data = {
    testData: testdata,
  };
  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
};
