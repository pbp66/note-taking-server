import {Router as router} from "express";
import path from "path";
import fs from "fs/promises";

const dbPath = path.resolve("../db/db.json");