import { API_URL } from "./settings";
import { HubConnectionBuilder} from '@microsoft/signalr';

export const connectWebsocket = new HubConnectionBuilder()
    .withUrl(`${API_URL}/signalrServer`)
    .withAutomaticReconnect()
    .build();