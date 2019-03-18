
export default function(state = {}, action) {
    
    switch (action.type) {
        
        case 'success':
            return { 
                ...state,
                data: action.payload 
            };
        case 'clearUser':{
            return {
                ...state,
                data: '',
            }
        }
        case 'main_data_loaded': {
            return {
                ...state,
                mainData: action.payload
            }
        }
        case 'writeFullNames' :{
            return {
                ...state,
                fullNames: action.fullNames
            }
        }

        case 'fail': 
            return { data: null }
        default: 
            return state;
    }
}