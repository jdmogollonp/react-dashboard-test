// action - state management

const LIST_PROJECT = 'LIST_PROJECT';
const CREATE_PROJECT = 'CREATE_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';

export const initialState = {
    projects: [{}],
    newProject: {
        projectId: '',
        projectName: '',
        description: '',
        tags: '',
        isPublic: false,
        urlOriginalFile: '',
        urlQualityCheck: '',
        qualityState: '',
        urlQualityProcessing: ''
    }
};

//-----------------------|| PROJECT REDUCER ||-----------------------//

export default function projectReducer(state = initialState, action) {
    switch (action.type) {
        case LIST_PROJECT: {
            const { projects } = action.payload;
            return {
                ...state,
                projects
            };
        }
        case CREATE_PROJECT: {
            const { data } = action.payload;
            return {
                ...state,
                newProject: {
                    ...state.newProject,
                    ...data
                }
            };
        }
        case DELETE_PROJECT: {
            return {
                ...state,
                newProject: {
                    ...initialState.newProject
                }
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
        dispatch({
            type: LIST_PROJECT,
            payload: {
                projects: [
                    {
                        projectId: '1',
                        projectName: 'test',
                        description: 'test',
                        tags: 'test',
                        isPublic: false,
                        urlOriginalFile: '',
                        urlQualityCheck: '',
                        qualityState: '',
                        urlQualityProcessing: ''
                    },
                    {
                        projectId: '2',
                        projectName: 'test2',
                        description: 'test2',
                        tags: 'test2',
                        isPublic: true,
                        urlOriginalFile: '',
                        urlQualityCheck: '',
                        qualityState: '',
                        urlQualityProcessing: ''
                    }
                ]
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const createProject = (project) => (dispatch, getState) => {
    console.log(project);
    try {
        dispatch({
            type: CREATE_PROJECT,
            payload: {
                data: { ...project }
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export const clearNewProject = () => (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_PROJECT
        });
    } catch (error) {
        console.log(error);
    }
};
