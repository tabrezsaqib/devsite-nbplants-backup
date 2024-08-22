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
import Router from "next/router"
import { Divider, Stack } from '@mui/material';
import { Close, ErrorOutlineOutlined } from '@mui/icons-material';
import { activeFilterData } from '../../redux/actions/selectorFilterAction';
import { useSelector, useDispatch } from 'react-redux';
import { tooltipData } from '../../data/tooltipData';
import {
    toggleLeafBladeEdgesData,
    toggleLeafTypeData,
    toggleLeafArrangementData,
    toggleInflorescence,
    togglePetalSymmetry,
    toggleFruits
} from "../../redux/actions/toggleSelectorAction"

const tooltipTyle = ['inflorescence', 'leaf_type', 'leaf_blade_edges', 'leaf_arrangement', 'petal_symmetry','fruit_type']

const HtmlTooltip = styled(({ className, handleTooltipClose, open, ...props }) => (
    <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
            <Tooltip arrow PopperProps={{ disablePortal: true, }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener placement="right" {...props} classes={{ popper: className }} />
        </div></ClickAwayListener>
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: '100%',
        padding: '0',
        border: '2px solid black',
        fontFamily: "Lato, Droid Sans, Helvetica Neue, sans-serif !important"
    },
}));

export default function CustomizedTooltips({ name }) {
    const [open, setOpen] = React.useState(false);

    const selector_opt = useSelector(state => state.selector);
    const { inflorescence, leaf_type, leaf_blade_edges, leaf_arrangement, activeFilterList, petal_symmetry ,fruit_type} = useSelector(state => state.selector);
    const dispatch = useDispatch();
    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const loadInvasivePlantList = async () => {
        Router.push({
            pathname: "/conservationRankDetails",
            query: { keyword: 'Invasive' },
        }).then(() => {
        })
    }



    const checkboxChange = (option, position, label) => {
        const filterIndex = activeFilterList.indexOf(label)
        const newFilter = [...activeFilterList]
        if(filterIndex === -1)
        newFilter.push(label)
        else
        newFilter.splice(filterIndex, 1)
        dispatch(activeFilterData(newFilter))
        switch (option) {

            case "leaf_arrangement":
                const updatedLeafArrangement = leaf_arrangement.map((item, index) =>
                    index === position ? !item : item
                )
                dispatch(toggleLeafArrangementData(updatedLeafArrangement))
                break
            case "leaf_blade_edges":
                const updatedLeafBladeEdges = leaf_blade_edges.map((item, index) =>
                    index === position ? !item : item
                )
                dispatch(toggleLeafBladeEdgesData(updatedLeafBladeEdges))
                break

            case "leaf_type":
                const updatedLeafType = leaf_type.map(
                    (item, index) => (index === position ? !item : item) // if index === position then !item i.e. true, otherwise false, since initially item is false...
                )
                dispatch(toggleLeafTypeData(updatedLeafType))
                break

            case "inflorescence":
                const updatedInflorescence = inflorescence.map((item, index) =>
                    index === position ? !item : item
                )
                dispatch(toggleInflorescence(updatedInflorescence))
                break

            case "petal_symmetry":
                const updatedPetal = petal_symmetry.map((item, index) =>
                    index === position ? !item : item
                )
                dispatch(togglePetalSymmetry(updatedPetal))
                break

                case "fruit_type":
                    const updatedFruits = fruit_type.map((item, index) =>
                        index === position ? !item : item
                    )
                    dispatch(toggleFruits(updatedFruits))
                    break
            default:
                break
        }
    }
    return (
        <>
            {name === 'invasive' ?
                <HtmlTooltip
                    handleTooltipClose={handleTooltipClose}
                    open={open}
                    title={
                        <React.Fragment>
                            <Stack direction='row' alignItems='flex-end' justifyContent='space-between'>
                                <h5 style={{ fontSize: '19px' }}>
                                    Invasive Species

                                </h5>
                                <IconButton aria-label="close" onClick={handleTooltipClose}>
                                    <Close />
                                </IconButton>
                            </Stack>
                            <Divider sx={{ mb: '10px' }} />
                            <div style={{ fontSize: '14px', padding: '10px' }}>
                                A plant that has been “accidentally or deliberately introduced into  <br></br>ecosystems beyond theirnative range and whose introduction or spread<br></br> negatively  impacts the environment, economy,and/or society including<br></br> human health.” –
                                <a href="https://www.nbinvasives.ca/" target="_blank" rel="noopener"> <em><span style={{ color: 'rgb(51, 153, 102)' }}> New Brunswick Invasive Species Council</span></em></a>
                                <br></br>
                                <p style={{ marginTop: '10px' }}><strong>
                                    <a onClick={loadInvasivePlantList} style={{ color: 'rgb(51, 153, 102)', cursor: 'pointer' }}>
                                        List of Invasive Species in New Brunswick.</a></strong></p>
                            </div>
                        </React.Fragment>
                    }
                >
                    <h6
                        style={{ margin: '10px 8px', cursor: 'pointer' }} onClick={() => handleTooltipOpen()}>
                        <ErrorOutlineOutlined sx={{ color: 'white', borderRadius: '40px', backgroundColor: 'red' }} />
                    </h6>
                </HtmlTooltip> :
                <HtmlTooltip
                    handleTooltipClose={handleTooltipClose}
                    open={open}
                    title={
                        <React.Fragment>
                            <Stack direction='row' alignItems='flex-end' justifyContent='space-between'>
                                <h5 style={{ fontSize: '17px' }}>
                                    {tooltipData[tooltipTyle.indexOf(name)]?.heading}
                                </h5>
                                <IconButton aria-label="close" onClick={handleTooltipClose}>
                                    <Close />
                                </IconButton>
                            </Stack>
                            <Divider sx={{ mb: '10px' }} />
                            <FormGroup>
                                {tooltipData[tooltipTyle.indexOf(name)]?.options.map((checkbox) =>
                                    <FormControlLabel control={<Checkbox color="success" checked={selector_opt[name][checkbox.value]} onChange={() => checkboxChange(name, checkbox.value, checkbox.label)} size="small" />} sx={{ fontSize: '12px' }} label={ReactHtmlParser(checkbox.content)} />)}
                            </FormGroup>
                        </React.Fragment>
                    }
                >
                    <i className="bi bi-info-circle-fill" onClick={() => handleTooltipOpen()} />
                </HtmlTooltip>
            }
            <style>
                {`
                    .MuiTooltip-arrow::before{
                        border: 2px solid black;
                        background-color: #e6f6f1;
                    }
                    .MuiFormControlLabel-label{
                        font-size: 12px
                    }
                    .MuiFormControlLabel-label {
                        display:flex;
                        align-items:center;
                        gap:18px
                    }
                    .MuiTooltip-tooltip .MuiStack-root{
                        background-color:#e7f9e8;
                        padding: 0 8px;
                    }
                    .MuiFormGroup-root{
                        padding: 8px
                    }
                    .labelDesc{
                        width: 35vw
                    }
                   
                    `}
            </style>
        </>

    );
}