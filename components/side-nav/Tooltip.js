import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ReactHtmlParser from "react-html-parser"
import ClickAwayListener from '@mui/material/ClickAwayListener';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Typography from '@mui/material/Typography';
import { Divider, Stack } from '@mui/material';
import { Close } from '@mui/icons-material';



const HtmlTooltip = styled(({ className, handleTooltipClose, open, ...props }) => (
    // <ClickAwayListener onClickAway={handleTooltipClose}>
    <Tooltip arrow PopperProps={{ disablePortal: true, }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener placement="right" {...props} classes={{ popper: className }} />
    // </ClickAwayListener>
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f3fff6',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: '90%',
        maxHeight: '80vh',
        border: '1px solid #dadde9',
    },
}));

export default function CustomizedTooltips({ name }) {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    return (
        <div>
            {name === 'inflorescence' ?
                <HtmlTooltip
                    handleTooltipClose={handleTooltipClose}
                    open={open}
                    title={
                        <React.Fragment>
                            <Stack direction='row' justifyContent='space-between'>
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Flower Arrangement (Inflorescence)
                                </h5>
                                <IconButton aria-label="close" onClick={handleTooltipClose}>
                                    <Close />
                                </IconButton>
                            </Stack>
                            <Divider sx={{ mb: '10px' }} />
                            <FormGroup>
                                <FormControlLabel control={<Checkbox color="success" defaultChecked size="small" />} sx={{ fontSize: '13px' }} label={ReactHtmlParser(`<b>Cyme: </b>flattish topped flower arrangement with stalked flower rising from one point of a common stalk; the inner flowers bloom first`)} />
                                <FormControlLabel control={<Checkbox color="success" size="small" />} sx={{ fontSize: '13px' }} label={ReactHtmlParser("<b>Panicle:  </b>loose irregular arrangement of stalked flowers; each branch has multiple stalked flowers; a panicle is made up of multiple racemes")} />
                                <FormControlLabel control={<Checkbox color="success" size="small" />} sx={{ fontSize: '13px' }} label={ReactHtmlParser("<b>Raceme: </b> flower arrangement where each flower is on an individual stalk along a central stem; a panicle includes multiple racemes")} />
                                <FormControlLabel control={<Checkbox color="success" size="small" />} sx={{ fontSize: '13px' }} label={ReactHtmlParser("<b>Solitary flower:  </b>a single flower that is not part of a grouped flower arrangement")} />
                                <FormControlLabel control={<Checkbox color="success" size="small" />} sx={{ fontSize: '13px' }} label={ReactHtmlParser("<b>Spike:  </b>flower arrangement with stalkless (sessile) flowers arranged on a stem <img src='/images/popup-img.png' style={{border:'1px solid grey'}} height='100x' width='100x'></img>")} />
                                <FormControlLabel control={<Checkbox color="success" size="small" />} sx={{ fontSize: '13px' }} label={ReactHtmlParser("<b>Umbel:  </b>flattish topped flower arrangement with stalked flowers rising from one point of a common stalk; the outer flowers open first <img src='/images/popup-img.png' style={{border:'1px solid grey'}} height='100x' width='100x'></img>")} />
                            </FormGroup>
                            <div style={{ textAlign: 'right' }}>
                                <Button variant="contained" color='success' size='small'>Apply Selection</Button>
                            </div>
                        </React.Fragment>
                    }
                >
                    <i className="bi bi-info-circle-fill" onClick={() => handleTooltipOpen()} />
                </HtmlTooltip> :
                <HtmlTooltip
                    handleTooltipClose={handleTooltipClose}
                    open={open}
                    title={
                        <React.Fragment>
                            <Stack direction='row' justifyContent='space-between'>
                                <h5 className="modal-title" id="exampleModalLabel" style={{ fontSize: '17px', }}>
                                    Petal symmetry
                                </h5>
                                <IconButton aria-label="close" onClick={handleTooltipClose}>
                                    <Close />
                                </IconButton>
                            </Stack>
                            <Divider sx={{ mb: '10px' }} />
                            <FormGroup>
                                <FormControlLabel control={<Checkbox color="success" defaultChecked size="small" />} sx={{ fontSize: '13px' }} label={`Bilateral petal symmetry: flower can only be divided evenly in one way e.g. Orchids`} />
                                <FormControlLabel required control={<Checkbox color="success" size="small" />} sx={{ fontSize: '13px' }} label="Radial petal symmetry: flower can be divided evenly multiple ways e.g. Asters" />
                            </FormGroup>
                            <div style={{ textAlign: 'right' }}>
                                <Button variant="contained" color='success' size='small'>Apply Selection</Button>
                            </div>
                        </React.Fragment>
                    }
                >
                    <i className="bi bi-info-circle-fill" onClick={() => handleTooltipOpen()} />
                </HtmlTooltip>}
            <style>
                {`
                    .MuiTooltip-arrow::before{
                        border: 1px solid #dadde9;
                        background-color: #e6f6f1;
                    }`}
            </style>
        </div>

    );
}