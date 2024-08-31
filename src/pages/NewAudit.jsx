import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { collection, addDoc, getFirestore } from "firebase/firestore"; // Firestore methods

const NewAudit = () => {
  const db = getFirestore();
  const [time, setTime] = useState(dayjs()); // Default to current time
  const [restaurantName, setRestaurantName] = useState("");
  const [auditor, setAuditor] = useState("");
  const [managerName, setManagerName] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleStartAudit = async () => {
    try {
      // Create a new document in Firestore
      const docRef = await addDoc(collection(db, "audits"), {
        time: time.format("HH:mm"),
        restaurantName,
        auditor,
        managerName,
        createdAt: new Date(),
      });

      // Redirect to the new audit page
      navigate(`/audits/${docRef.id}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 400,
        margin: "auto",
        mt: 5,
        p: 2,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Hora del día"
          value={time}
          onChange={(newValue) => setTime(newValue)}
          renderInput={(params) => (
            <TextField {...params} fullWidth margin="normal" />
          )}
        />
      </LocalizationProvider>

      <TextField
        label="Nombre del Restaurante"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="auditor-label">Auditor</InputLabel>
        <Select
          labelId="auditor-label"
          value={auditor}
          onChange={(e) => setAuditor(e.target.value)}
        >
          <MenuItem value="Montserrat Gonzalez">Montserrat Gonzalez</MenuItem>
          <MenuItem value="Edgar Sanchez">Edgar Sanchez</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Gerente/Encargado de turno"
        value={managerName}
        onChange={(e) => setManagerName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleStartAudit}
        sx={{ mt: 3 }}
      >
        Iniciar Auditoría
      </Button>
    </Box>
  );
};

export default NewAudit;
