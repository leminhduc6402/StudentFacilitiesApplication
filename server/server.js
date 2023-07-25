import { app, PORT } from "./index.js";

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
