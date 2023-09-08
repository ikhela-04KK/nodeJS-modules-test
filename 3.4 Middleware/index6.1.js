import express from "express"; 
import {cartValidation} from "./index6.js"

const app = express();

app.use(cartValidation.checkWaiters);
app.use(cartValidation.checkGuestCounts);