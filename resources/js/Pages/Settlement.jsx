import { Box, Button, Link, Paper, TextField, Typography, InputAdornment } from "@mui/material";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';
import { useForm } from '@inertiajs/react';

export default function Settlement(props) {
    const { project } = props;

    const { data, setData, post, processing, errors, reset } = useForm({
        amount: '',
        
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('payment', { id: project.id }));
    };

    return (
        <Paper
            sx={{
                p: 4,
                width: "500px",
                m: "30px auto",
            }}
        >
            <Typography variant={"h5"}>支援内容</Typography>
            <form onSubmit={submit}>
                <Box m={2}>
                    <Typography variant={"h4"}>{project.title}</Typography>
                </Box>
                <Box mt={2}>
                    <TextField
                        label="支援金額"
                        variant="standard"
                        required
                        sx={{ mt: 1 }}
                        type="number"
                        value={data.amount}
                        onChange={(e) => setData('amount', e.target.value)}     
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
                    disabled={processing}
                    href={route("project.show", { id: (props.project.id -1)})}
                >
                    支援する
                </Button>
            </form>
        </Paper >
    );
}
