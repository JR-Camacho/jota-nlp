import tensorflow as tf
import pickle

def tokenize(lang, tokenizer_path):
    if not tokenizer_path:
        raise ValueError("You should add a valid path for the tokenizer.")

    if tf.io.gfile.exists(tokenizer_path):
        with open(tokenizer_path, 'rb') as tokenizer_file:
            lang_tokenizer = pickle.load(tokenizer_file)
    else:
        lang_tokenizer = tf.keras.preprocessing.text.Tokenizer(filters='')
        lang_tokenizer.fit_on_texts(lang)
        with open(tokenizer_path, 'wb') as tokenizer_file:
            pickle.dump(lang_tokenizer, tokenizer_file)

    tensor = lang_tokenizer.texts_to_sequences(lang)

    tensor = tf.keras.preprocessing.sequence.pad_sequences(tensor, padding='post')

    return tensor, lang_tokenizer