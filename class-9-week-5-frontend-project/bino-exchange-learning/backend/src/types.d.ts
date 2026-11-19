// src/types.d.ts
declare global {
    namespace Express {
        interface Request {
            userId?: string;  //since express doesn't have any idea about the userId in the req object which we are attaching manually
        }
    }
}

export {};  // makes this a ts module
