import  Button  from './Button';
import Input from './Input'
import { useDispatch, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseSavedWord, chooseMeaning, chooseWordType, chooseOrigin } from '../redux/slices/RootSlice';

import { server_calls } from '../api/server';

interface ContactFormProps {
  id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id);
        console.log(data);
        if (props.id && props.id.length > 0 ) {
          server_calls.update(props.id[0], data);
          console.log(`Updated: ${ data.name } ${ props.id }`);
          setTimeout(() => {window.location.reload()}, 1000);
          event.target.reset();
      } else {
          dispatch(chooseSavedWord(data.saved_word));
          dispatch(chooseMeaning(data.meaning));
          dispatch(chooseWordType(data.word_type));
          dispatch(chooseOrigin(data.origin));
          server_calls.create(store.getState());
          setTimeout( () => {window.location.reload()}, 1000)
      }
  }
  return (
    <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="saved_word">Word</label>
                <Input {...register('saved_word')} name="saved_word" placeholder='Word'/>
            </div>
            <div>
                <label htmlFor="meaning">Meaning</label>
                <Input {...register('meaning')} name="meaning" placeholder='Meaning'/>
            </div>
            <div>
                <label htmlFor="word_type">Word Type</label>
                <Input {...register('word_type')} name="word_type" placeholder='Word Type'/>
            </div>
            <div>
                <label htmlFor="origin">Origin</label>
                <Input {...register('origin')} name="origin" placeholder='Origin'/>
            </div>
            <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </form>
    </div>
)
}

export default ContactForm