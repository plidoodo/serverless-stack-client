const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-upload-erikbd",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://ur0kd53e2g.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_Wk8Rm1LeE",
        APP_CLIENT_ID: "3ca0te7e3li6f216u6c3bb9plm",
        IDENTITY_POOL_ID: "us-east-2:1e41df2e-bc86-4202-b223-5db975e8958e",
    },
};

export default config;