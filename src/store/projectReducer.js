// action - state management

const LIST_PROJECT = 'LIST_PROJECT';
const CREATE_PROJECT = 'CREATE_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';

export const initialState = {
    projects: [{}],
    newProject: {
        ProjectName: '',
        description: '',
        tags: '',
        isPublic: false,
        urlOriginalFile: '',
        urlQualityCheck: '',
        qualityState: '',
        urlQualityProcessing: '',
    }

};

//-----------------------|| PROJECT REDUCER ||-----------------------//

export default function projectReducer (state = initialState, action){
    switch (action.type) {
        case LIST_PROJECT: {
            const { projects } = action.payload;
            return {
                ...state,
                projects,
            };
        }
        case CREATE_PROJECT: {
            const { data } = action.payload;
            return {
                ...state,
                newProject:{
                    ...state.newProject,
                    ...data
                }
            };
        }
        case DELETE_PROJECT: {
            const { projects } = action.payload;
            return {
                ...state,
                projects,
            };
        }
        default: {
            return { ...state };
        }
    } 
}

export const listProjects = () => (dispatch, getState) => {
    try {
        // consulto la api y retorno los datos de la lista de proyectos
        dispatch( { 
            type:LIST_PROJECT, 
            payload: {
                projects: 
                    [
                        {                        
                            ProjectName: 'test',
                            description: 'test',
                            tags: 'test',
                            isPublic: false,
                            urlOriginalFile: '',
                            urlQualityCheck: '',
                            qualityState: '',
                            urlQualityProcessing: '',
                        },
                        {                        
                            ProjectName: 'test2',
                            description: 'test2',
                            tags: 'test2',
                            isPublic: true,
                            urlOriginalFile: '',
                            urlQualityCheck: '',
                            qualityState: '',
                            urlQualityProcessing: '',
                        },

                    ]
                } 
            })
    } catch (error) {
        console.log(error)
    }
   
}
