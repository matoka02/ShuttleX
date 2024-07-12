import { View, Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootState } from "../redux/store";
import { addChat, deleteChat } from "../redux/chatSlice";

interface Props {
  navigation: NativeStackNavigationProp<any, any>;
};

const ChatList: React.FC<Props> = ({ navigation }) => {
  const chats = useSelector((state: RootState) => state.chat.chats);
  const dispatch = useDispatch();

  const createChat = () => {
    const newChat = {
      id: String(Date.now()),
      name: 'New Chat',
      messages: [],
      author: 'user1',
    };
    dispatch(addChat(newChat));
  };

  const deleteSelectChat = (chatId: string) => {
    dispatch(deleteChat(chatId));
  };

  const navigateToChat = (chatId: string) => {
    navigation.navigate('Chat', { chatId });
  };

  return (
    <View
      style={{ flex: 1, padding: 10 }}
    >
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{ marginBottom: 10, gap: 10 }}
          >
            <Text>{item.name}</Text>
            <Button
              title='Delete Chat' 
              color='#be3455'
              onPress={() => deleteSelectChat(item.id)}
            />
            <Button
              title='Enter Chat'
              color='#be3455'
              onPress={() => navigateToChat(item.id)}
            />
          </View>
        )}
      />

      <Button
        title='Create Chat'
        color='#be3455'
        onPress={createChat}
      />
    </View>
  )

}

export default ChatList;
