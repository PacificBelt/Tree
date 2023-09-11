import { Box, Button, Link, Paper, TextField, Typography, InputAdornment } from "@mui/material";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';

export default function Settlement() {
    return (
        <Paper
            sx={{
                p: 4,
                width: "500px",
                m: "30px auto",
            }}
        >
            <Typography variant={"h5"}>支援内容</Typography>
            <Box m={2}>
                <Typography variant={"h4"}>[支援プロジェクト名]</Typography>
            </Box>
            <Box mt={2}>
                <TextField
                    label="支援金額"
                    variant="standard"
                    required
                    sx={{ mt: 1 }}
                    type="number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                ¥
                            </InputAdornment>
                        ),
                    }}
                >
                </TextField>
            </Box>
            <Box mt={2}>

                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">支援方法選択</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="credit"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="credit" control={
                            <>
                                <Radio size="small" />
                                <CreditCardTwoToneIcon />
                            </>
                        } label="各種クレジットカード">

                        </FormControlLabel>
                        <FormControlLabel value="バーコード決済" control={
                            <>
                                <Radio size="small" />
                                <QrCode2TwoToneIcon />
                            </>
                        } label="バーコード決済" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                sx={{ mt: 4 }}
            >
                支援する
            </Button>
        </Paper >
    );
}
