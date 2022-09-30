//Washers
import Washer_PTW905BPTRS from '../images/Washers/Washer_PTW905BPTRS.jpg';
import Washer_PTW900BPTDG from '../images/Washers/Washer_PTW900BPTDG.jpg';
import PTW900BPTRS from '../images/Washers/PTW900BPTRS.jpg';
import HTW240ASKWS from '../images/Washers/HTW240ASKWS.jpg';
import GTW335ASNWW from '../images/Washers/GTW335ASNWW.webp';
import GTW465ASNWW from '../images/Washers/GTW465ASNWW.webp';

//Dryers
import Dryer_PTD90GBPTDG from '../images/Dryers/Dryer_PTD90GBPTDG.jpg';
import Dryer_PTD90GBPTRS from '../images/Dryers/Dryer_PTD90GBPTRS.jpg';
import PTD90EBPTRS from '../images/Dryers/PTD90EBPTRS.jpg';
import HTX24EASKWS from '../images/Dryers/HTX24EASKWS.jpg';
import GTD72EBSNWS from '../images/Dryers/GTD72EBSNWS.jpg';
import GTD42EASJWW from '../images/Dryers/GTD42EASJWW.webp';
import GTD33EASKWW from '../images/Dryers/GTD33EASKWW.webp';
import GTX33EASKWW from '../images/Dryers/GTX33EASKWW.webp';


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
    {
        name: 'HOTPOINT® 3.8 CU. FT. CAPACITY WASHER WITH STAINLESS STEEL BASKET',
        type: 'Washer',
        features: 'Stainless steel basket, Powerful wash action rotates your laundry for a thorough clean every time, PreciseFill with the option of 4 water level selections',
        link: 'https://products.geappliances.com/appliance/hotpoint-specs/HTW240ASKWS#tab1_',
        model: 'HTW240ASKWS',
        image: HTW240ASKWS
    },
    {
        name: 'GE® 4.2 cu. ft. Capacity Washer with Stainless Steel Basket',
        type: 'Washer',
        features: 'Deep Clean Cycle, 4.2 cu ft Capacity, Water Level/Load Size, Dimensions: 44 H x 27 W x 27 D',
        link: 'https://www.geappliances.com/appliance/GE-4-2-cu-ft-Capacity-Washer-with-Stainless-Steel-Basket-GTW335ASNWW',
        model: 'GTW335ASNWW',
        image: GTW335ASNWW
    },
    {
        name: 'GE® 4.5 cu. ft. Capacity Washer with Stainless Steel Basket',
        type: 'Washer',
        features: 'Deep Fill, Deep Clean Cycle, Speed Wash, Dimensions: 44 H x 27 W x 27 D',
        link: 'https://www.geappliances.com/appliance/GE-4-5-cu-ft-Capacity-Washer-with-Stainless-Steel-Basket-GTW465ASNWW',
        model: 'GTW465ASNWW',
        image: GTW465ASNWW
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
    {
        name: 'HOTPOINT® 6.2 CU. FT. CAPACITY ALUMINIZED ALLOY ELECTRIC DRYER',
        type: 'Dryer',
        features: 'Auto Dry, Up to 120ft. venting capability, Aluminized alloy drum, 3 head selections, Delicate cycle, Side swing door, Upfront lint filter, End-of-cycle signal, Reverse-a-door',
        link: 'https://products.geappliances.com/appliance/hotpoint-specs/HTX24EASKWS#tab1_',
        model: 'HTX24EASKWS',
        image: HTX24EASKWS
    },
    {
        name: 'GE® 7.4 cu. ft. Capacity aluminized alloy drum Electric Dryer with Sanitize Cycle and Sensor Dry',
        type: 'Dryer',
        features: 'Sensor Dry, Sanitize Cycle, Up to 120 ft. venting, Dimensions: 46 H x 27 W x 30 1/2 D',
        link: 'https://www.geappliances.com/appliance/GE-7-4-cu-ft-Capacity-aluminized-alloy-drum-Electric-Dryer-with-Sanitize-Cycle-and-Sensor-Dry-GTD72EBSNWS',
        model: 'GTD72EBSNWS',
        image: GTD72EBSNWS
    },
    {
        name: 'GE® 7.2 cu. ft. Capacity aluminized alloy drum Electric Dryer',
        type: 'Dryer',
        features: 'Auto Dry, Up to 120 ft. venting capability, Aluminized alloy drum, Dimensions: 44 H x 27 W x 29 1/2 D',
        link: 'https://www.geappliances.com/appliance/GE-7-2-cu-ft-Capacity-aluminized-alloy-drum-Electric-Dryer-GTD42EASJWW',
        model: 'GTD42EASJWW',
        image: GTD42EASJWW
    },
    {
        name: 'GE® 7.2 cu. ft. Capacity aluminized alloy drum Electric Dryer',
        type: 'Dryer',
        features: 'Auto Dry, Up to 120 ft. venting capability, Aluminized alloy drum, Dimensions: 44 H x 27 W x 29 1/2 D',
        link: 'https://www.geappliances.com/appliance/GE-7-2-cu-ft-Capacity-aluminized-alloy-drum-Electric-Dryer-GTD33EASKWW',
        model: 'GTD33EASKWW',
        image: GTD33EASKWW
    },
    {
        name: 'GE® 6.2 cu. ft. Capacity aluminized alloy drum Electric Dryer',
        type: 'Dryer',
        features: 'Auto Dry, Up to 120 ft. venting capability, Aluminized alloy drum, Dimensions: 44 H x 27 W x 26 3/4 D',
        link: 'https://www.geappliances.com/appliance/GE-6-2-cu-ft-Capacity-aluminized-alloy-drum-Electric-Dryer-GTX33EASKWW',
        model: 'GTX33EASKWW',
        image: GTX33EASKWW
    },

    // Stacked
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