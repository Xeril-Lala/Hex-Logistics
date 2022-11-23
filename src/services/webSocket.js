import { API_URL } from "./settings";
import { HubConnectionBuilder} from '@microsoft/signalr';

import {io} from "socket.io-client";

export const socket = io(API_URL);

export const connectWebsocket = new HubConnectionBuilder()
    .withUrl(`${API_URL}/signalrServer`)
    .withAutomaticReconnect()
    .build();