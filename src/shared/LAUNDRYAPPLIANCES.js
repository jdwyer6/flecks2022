//Washers
import Washer_PTW905BPTRS from '../images/Washers/Washer_PTW905BPTRS.jpg';
import Washer_PTW900BPTDG from '../images/Washers/Washer_PTW900BPTDG.jpg';
import PTW900BPTRS from '../images/Washers/PTW900BPTRS.jpg';
//Dryers
import Dryer_PTD90GBPTDG from '../images/Dryers/Dryer_PTD90GBPTDG.jpg';
import Dryer_PTD90GBPTRS from '../images/Dryers/Dryer_PTD90GBPTRS.jpg';
import PTD90EBPTRS from '../images/Dryers/PTD90EBPTRS.jpg';
//Stacked
import GUD27GSPMDG from '../images/Stacked/GUD27GSPMDG.jpg';
import GUD27ESPMDG from '../images/Stacked/GUD27ESPMDG.jpg';
import GUD27GSSMWW from '../images/Stacked/GUD27GSSMWW.webp';



const LAUNDRYAPPLIANCES = [
    //Washers
    {
        name: 'GE Profile™ 5.3 cu. ft. Capacity Washer with Smarter Wash Technology and FlexDispense™',
        type: 'Washer',
        model: 'PTW905BPTRS',
        features: 'Voice Assistant w/Alexa Built In, SmartDispense™ Technology, Smart Wash & Smart Rinse, Dimensions: 43 7/8 H x 27 7/8 W x 28 D', 
        link: 'https://www.geappliances.com/appliance/GE-Profile-5-3-cu-ft-Capacity-Washer-with-Smarter-Wash-Technology-and-FlexDispense-PTW905BPTRS',
        image: Washer_PTW905BPTRS
    },
    {
        name: 'GE Profile™ 5.4 cu. ft. Capacity Washer with Smarter Wash Technology and FlexDispense™',
        type: 'Washer',
        model: 'PTW900BPTDG',
        features: 'Voice Assistant w/Alexa Built In, SmartDispense™ Technology, Smart Wash & Smart Rinse, Dimensions: 43 7/8 H x 27 7/8 W x 28 D', 
        link: 'https://www.geappliances.com/appliance/GE-Profile-5-4-cu-ft-Capacity-Washer-with-Smarter-Wash-Technology-and-FlexDispense-PTW900BPTDG',
        image: Washer_PTW900BPTDG
    },
    {
        name: 'GE Profile™ 5.4 cu. ft. Capacity Washer with Smarter Wash Technology and FlexDispense™',
        type: 'Washer',
        model: 'PTW900BPTRS',
        features: 'Voice Assistant w/Alexa Built In, SmartDispense™ Technology, Smart Wash & Smart Rinse, Dimensions: 43 7/8 H x 27 7/8 W x 28 D', 
        link: 'https://www.geappliances.com/appliance/GE-Profile-5-4-cu-ft-Capacity-Washer-with-Smarter-Wash-Technology-and-FlexDispense-PTW900BPTRS',
        image: PTW900BPTRS
    },
    // Dryers
    {
        name: 'GE Profile™ 7.3 cu. ft. Capacity Smart Gas Dryer with Fabric Refresh',
        type: 'Dryer',
        model: 'PTD90GBPTDG',
        features: 'Fabric Refresh, Steam, Tangle Control, Dimensions: 43 7/8 H x 27 W x 31 D', 
        link: 'https://www.geappliances.com/appliance/GE-Profile-7-3-cu-ft-Capacity-Smart-Gas-Dryer-with-Fabric-Refresh-PTD90GBPTDG',
        image: Dryer_PTD90GBPTDG
    },
    {
        name: 'GE Profile™ 7.3 cu. ft. Capacity Smart Gas Dryer with Fabric Refresh',
        type: 'Dryer',
        model: 'PTD90GBPTRS',
        features: 'Fabric Refresh, Steam, Tangle Control, Dimensions: 43 7/8 H x 27 W x 31 D', 
        link: 'https://www.geappliances.com/appliance/GE-Profile-7-3-cu-ft-Capacity-Smart-Gas-Dryer-with-Fabric-Refresh-PTD90GBPTRS',
        image: Dryer_PTD90GBPTRS
    },
    {
        name: 'GE Profile™ 7.3 cu. ft. Capacity Smart Electric Dryer with Fabric Refresh',
        type: 'Dryer',
        model: 'PTD90EBPTRS',
        features: 'Fabric Refresh, Steam, Tangle Control, Dimensions: 43 7/8 H x 27 W x 31 D', 
        link: 'https://www.geappliances.com/appliance/GE-Profile-7-3-cu-ft-Capacity-Smart-Electric-Dryer-with-Fabric-Refresh-PTD90EBPTRS',
        image: PTD90EBPTRS
    },
    //Stacked
    {
        name: 'GE Unitized Spacemaker® 3.8 cu. ft. Capacity Washer with Stainless Steel Basket and 5.9 cu. ft. Capacity Gas Dryer',
        type: 'Stacked',
        model: 'GUD27GSPMDG',
        features: 'Rotary- electromechanical controls (dryer), 11 wash cycles, 6 wash / rinse temperatures, Dimensions: 75 7/8 H x 26 3/4 W x 30 7/8 D', 
        link: 'https://www.geappliances.com/appliance/GE-Unitized-Spacemaker-3-8-cu-ft-Capacity-Washer-with-Stainless-Steel-Basket-and-5-9-cu-ft-Capacity-Gas-Dryer-GUD27GSPMDG',
        image: GUD27GSPMDG
    },
    {
        name: 'GE Unitized Spacemaker® 3.8 cu. ft. Capacity Washer with Stainless Steel Basket and 5.9 cu. ft. Capacity Electric Dryer',
        type: 'Stacked',
        model: 'GUD27ESPMDG',
        features: 'Rotary- electromechanical controls (dryer), 11 wash cycles, 6 wash / rinse temperatures, Dimensions: 75 7/8 H x 26 3/4 W x 30 7/8 D', 
        link: 'https://www.geappliances.com/appliance/GE-Unitized-Spacemaker-3-8-cu-ft-Capacity-Washer-with-Stainless-Steel-Basket-and-5-9-cu-ft-Capacity-Electric-Dryer-GUD27ESPMDG',
        image: GUD27ESPMDG
    },
    {
        name: 'GE Unitized Spacemaker® 3.8 cu. ft. Capacity Washer with Stainless Steel Basket and 5.9 cu. ft. Capacity Gas Dryer',
        type: 'Stacked',
        model: 'GUD27GSSMWW',
        features: 'Rotary- electromechanical controls (dryer), 11 wash cycles, 6 wash / rinse temperatures, Dimensions: 75 7/8 H x 26 3/4 W x 30 7/8 D', 
        link: 'https://www.geappliances.com/appliance/GE-Unitized-Spacemaker-3-8-cu-ft-Capacity-Washer-with-Stainless-Steel-Basket-and-5-9-cu-ft-Capacity-Gas-Dryer-GUD27GSSMWW',
        image: GUD27GSSMWW
    },



]

export default LAUNDRYAPPLIANCES;