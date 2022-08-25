import Refrigerator_PYE22KELDS from '../images/Refrigerators/Refrigerator_PYE22KELDS.webp';
import Refrigerator_GTE16DTNRCC from '../images/Refrigerators/Refrigerator_GTE16DTNRCC.jpg';
import Refrigerator_GDE03GGKBB from '../images/Refrigerators/Refrigerator_GDE03GGKBB.jpg';
import Range_PGB965BPTS from '../images/Ranges/Range_PGB965BPTS.jpg';
import Range_PGB965YPFS from '../images/Ranges/Range_PGB965YPFS.jpg';
import Range_PGS960YPFS from '../images/Ranges/Range_PGS960YPFS.webp';
import Oven_PTS9200SNSS from '../images/Ovens/Oven_PTS9200SNSS.jpg';
import Oven_PTS700RSNSS from '../images/Ovens/Oven_PTS700RSNSS.jpg';
import Oven_PTS700LSNSS from '../images/Ovens/Oven_PTS700LSNSS.jpg';
import Cooktop_PHP9036DJBB from '../images/Cooktops/Cooktop_PHP9036DJBB.webp';
import Cooktop_PP7030DJBB from '../images/Cooktops/Cooktop_PP7030DJBB.webp';
import Cooktop_PHP9036SJSS from '../images/Cooktops/Cooktop_PHP9036SJSS.webp';

const KITCHENAPPLIANCES = [
    //Refrigerators
    {
        name: 'GE Profile™ Series ENERGY STAR® 22.1 Cu. Ft. Counter-Depth French-Door Refrigerator with Hands-Free AutoFill',
        type: 'Refrigerator',
        model: 'PYE22KELDS',
        features: 'Counter-depth design, Hands-free Autofill, Full-width electronic temperature-controlled drawer with LED lights, Dimensions: 69 7/8 H x 35 3/4 W x 31 1/4 D',
        link: 'https://www.geappliances.com/appliance/GE-Profile-Series-ENERGY-STAR-22-1-Cu-Ft-Counter-Depth-French-Door-Refrigerator-with-Hands-Free-AutoFill-PYE22KELDS',
        image: Refrigerator_PYE22KELDS
    },
    {
        name: 'GE® ENERGY STAR® 15.6 Cu. Ft. Top-Freezer Refrigerator',
        type: 'Refrigerator',
        model: 'GTE16DTNRCC',
        features: '#1 in Quality and Dependability, LED lighting, Adjustable wire shelves, Dimensions: 61 3/4 H x 28 W x 32 5/8 D',
        link: 'https://www.geappliances.com/appliance/GE-ENERGY-STAR-15-6-Cu-Ft-Top-Freezer-Refrigerator-GTE16DTNRCC',
        image: Refrigerator_GTE16DTNRCC
    },
    {
        name: 'GE® Double-Door Compact Refrigerator',
        type: 'Refrigerator',
        model: 'GDE03GGKBB',
        features: 'Durability-tested compressor, Capacity, Separate true-freezer compartment, Dimensions: 33 3/8 H x 18 3/4 W x 20 1/8 D',
        link: 'https://www.geappliances.com/appliance/GE-Double-Door-Compact-Refrigerator-GDE03GGKBB',
        image: Refrigerator_GDE03GGKBB
    },
    //Ranges
    {
        name: 'GE Profile™ 30" Free-Standing Gas Double Oven Convection Range with No Preheat Air Fry',
        type: 'Range',
        model: 'PGB965BPTS',
        features: 'No Preheat Air Fry, Reversible grill and griddle, True Convection with Precise Air, Dimensions: 47 1/4 H x 30 W x 29 1/4 D',
        link: 'https://www.geappliances.com/appliance/GE-Double-Door-Compact-Refrigerator-GDE03GGKBB',
        image: Range_PGB965BPTS
    },
    {
        name: 'GE Profile™ 30" Free-Standing Gas Double Oven Convection Fingerprint Resistant Range with No Preheat Air Fry',
        type: 'Range',
        model: 'PGB965YPFS',
        features: 'No Preheat Air Fry, Reversible grill and griddle, True Convection with Precise Air, Dimensions: 47 1/4 H x 30 W x 29 1/4 D',
        link: 'https://www.geappliances.com/appliance/GE-Profile-30-Free-Standing-Gas-Double-Oven-Convection-Fingerprint-Resistant-Range-with-No-Preheat-Air-Fry-PGB965YPFS',
        image: Range_PGB965YPFS
    },
    {
        name: 'GE Profile™ 30" Smart Slide-In Front-Control Gas Double Oven Convection Fingerprint Resistant Range',
        type: 'Range',
        model: 'PGS960YPFS',
        features: 'No Preheat Air Fry, Built-In WiFi, Powered by SmartHQ App, GE Profile Connect +, Dimensions: 36 1/2 H x 30 W x 29 7/8 D',
        link: 'https://www.geappliances.com/appliance/GE-Profile-30-Smart-Slide-In-Front-Control-Gas-Double-Oven-Convection-Fingerprint-Resistant-Range-PGS960YPFS',
        image: Range_PGS960YPFS
    },
    //Ovens
    {
        name: 'GE Profile™ 30" Smart Built-In Twin Flex Convection W',
        type: 'Oven',
        model: 'PTS9200SNSS',
        features: 'Built-In WiFi, Powered by SmartHQ App, Two-In-One Oven, GE Profile Connect +, Dimensions: 28 1/8 H x 29 3/4 W x 26 3/4 D',
        link: 'https://www.geappliances.com/appliance/GE-Profile-30-Smart-Built-In-Twin-Flex-Convection-Wall-Oven-PTS9200SNSS',
        image: Oven_PTS9200SNSS
    },
    {
        name: 'GE Profile™ 30" Smart Built-In Convection Single Wall Oven with Right-Hand Side-Swing Doors',
        type: 'Oven',
        model: 'PTS700RSNSS',
        features: 'Built-In WiFi, Powered by SmartHQ App, GE Profile Connect +, Swing Door, Dimensions: 28 5/8 H x 29 3/4 W x 26 3/4 D',
        link: 'https://www.geappliances.com/appliance/GE-Profile-30-Smart-Built-In-Convection-Single-Wall-Oven-with-Right-Hand-Side-Swing-Doors-PTS700RSNSS',
        image: Oven_PTS700RSNSS
    },
    {
        name: 'GE Profile™ 30" Smart Built-In Convection Single Wall Oven with Left-Hand Side-Swing Doors',
        type: 'Oven',
        model: 'PTS700LSNSS',
        features: 'Built-In WiFi, Powered by SmartHQ App, GE Profile Connect +, Swing Door, Dimensions: 28 5/8 H x 29 3/4 W x 26 3/4 D',
        link: 'https://www.geappliances.com/appliance/GE-Profile-30-Smart-Built-In-Convection-Single-Wall-Oven-with-Left-Hand-Side-Swing-Doors-PTS700LSNSS',
        image: Oven_PTS700LSNSS
    },
    //Cooktops
    {
        name: 'GE Profile™ 36" Built-In Touch Control Induction Cooktop',
        type: 'Cooktop',
        model: 'PHP9036DJBB',
        features: 'Five Induction Elements, Digital Touch Controls, Power Boil (11" 3,700-Watt Induction Element), Dimensions: 4 5/8 H x 36 W x 20 3/8 D',
        link: 'https://www.geappliances.com/appliance/GE-Profile-36-Built-In-Touch-Control-Induction-Cooktop-PHP9036DJBB',
        image: Cooktop_PHP9036DJBB
    },
    {
        name: 'GE Profile™ 30" Built-In Knob Control Electric Cooktop',
        type: 'Cooktop',
        model: 'PP7030DJBB',
        features: 'Five radiant cooking elements, Power Boil Dual-Ring Element, SyncBurner, Dimensions: 5 9/16 H x 29 3/4 W x 20 7/8 D',
        link: 'https://www.geappliances.com/appliance/GE-Profile-30-Built-In-Knob-Control-Electric-Cooktop-PP7030DJBB',
        image: Cooktop_PP7030DJBB
    },
    {
        name: 'GE Profile™ 36" Built-In Touch Control Induction Cooktop',
        type: 'Cooktop',
        model: 'PHP9036SJSS',
        features: 'Five Induction Elements, Digital Touch Controls, Power Boil (11" 3,700-Watt Induction Element), Dimensions: 4 5/8 H x 36 1/8 W x 20 1/2 D',
        link: 'https://www.geappliances.com/appliance/GE-Profile-36-Built-In-Touch-Control-Induction-Cooktop-PHP9036SJSS',
        image: Cooktop_PHP9036SJSS
    },
    // {
    //     name: '',
    //     type: '',
    //     model: '',
    //     features: '',
    //     link: '',
    //     image: ''
    // },

]

export default KITCHENAPPLIANCES;