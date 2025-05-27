import { useKeycloak } from "@react-keycloak/web";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CustomDashboardLayout from "../../components/CustomDashboardLayout";
import GradientButton from "../../components/gradientButton";
import React from "react";

export default function Analize() {
  const { keycloak } = useKeycloak();
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<
    "url" | "file" | null
  >(null);
  const [url, setUrl] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleOpenModal = () => {
    setOpenModal(true);
    setSelectedOption(null);
    setUrl("");
    setFile(null);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleUrlSubmit = () => {
    console.log("URL enviada:", url);
    setOpenModal(false);
  };

  const handleFileSubmit = () => {
    console.log("Archivo enviado:", file);
    setOpenModal(false);
  };

  const handleBackToOptions = () => {
    setSelectedOption(null);
    setUrl("");
    setFile(null);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <CustomDashboardLayout>
      <Grid container spacing={2}>
        <Grid item>
          <GradientButton
            label="Nuevo análisis"
            startIcon={<AddIcon />}
            onClick={handleOpenModal}
          />
        </Grid>
      </Grid>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>¿Cómo deseas iniciar el análisis?</DialogTitle>
        <DialogContent>
          {!selectedOption && (
            <Stack spacing={2} mt={2}>
              <GradientButton
                label="Ingresar URL"
                onClick={() => setSelectedOption("url")}
                fullWidth
                variant="outlined"
              />
              <GradientButton
                label="Subir archivo"
                onClick={() => setSelectedOption("file")}
                fullWidth
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              />
            </Stack>
          )}

          {selectedOption === "url" && (
            <Stack spacing={2} mt={2}>
              <Typography variant="body2">
                Ingresa la URL del contenido a analizar:
              </Typography>
              <TextField
                label="URL"
                variant="outlined"
                fullWidth
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                  <GradientButton
                    label="Regresar"
                    onClick={handleBackToOptions}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <GradientButton
                    label="Enviar URL"
                    onClick={handleUrlSubmit}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Stack>
          )}

          {selectedOption === "file" && (
            <Stack spacing={2} mt={2}>
              <Typography variant="body2">
                Selecciona un archivo (JPG, PNG, JPEG) o arrástralo aquí:
              </Typography>

              {/* Área de arrastrar y soltar */}
              <Box
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
                sx={{
                  border: "2px dashed #ccc",
                  borderRadius: "8px",
                  padding: "24px",
                  textAlign: "center",
                  cursor: "pointer",
                  bgcolor: "#f9f9f9",
                  "&:hover": { bgcolor: "#f0f0f0" },
                  userSelect: "none",
                }}
              >
                <CloudUploadIcon fontSize="large" color="primary" />
                <Typography variant="body2" mt={1}>
                  {file
                    ? `Archivo seleccionado: ${file.name}`
                    : "Arrastra un archivo aquí o haz clic para subirlo"}
                </Typography>
              </Box>

              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />

              <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                  <GradientButton
                    label="Regresar"
                    onClick={handleBackToOptions}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <GradientButton
                    label="Subir archivo"
                    onClick={handleFileSubmit}
                    disabled={!file}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Stack>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </CustomDashboardLayout>
  );
}