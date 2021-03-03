## Introduction

This project was created to make an example of how to use Typescript's Project References to allow sharing of code between client react code and node express code that meets the following objectives:

- Visual Studio code intellisense works and does not show any errors.
- No need to eject or use tools like craco to modify create react app settings
- Normal cra development server with hot reloading works
- Server can be run using nodemon (with ts-node) and changes to the shared code will cause server restart and will use updated code.

## Prerequisites

- Node

## Install

- Copy/clone repository
- run npm install from client and server directories

## Usage

- Server:
  npm run start. You can then see the web page at localhost:3003. The console will output updated counter every second. If you go to localhost:3003/count, you'll get the latest counter count.
- Client: Normal CRA process...NPM start in client directory. In console you'll see the initial value of the counter.

- Updates: If you change the initial value of count in shared.ts, the server will restart and use the new initial value and the client will restart and use the new initial value.

  Note: The server counter and client counter instances are separate, this is just an example of client and server sharing code, not counter instances.

## Notes

- It is necessary to have a top level tsconfig for project references to work. This was not immediately clear to me and I was trying to do it through just settings in the server tsconfig and/or client tsconfig

- The shared code must reside inside the react app's src folder. This is because cra uses a setting that requires all code to reside within the src folder.

- The shared code needs to be in its own subfolder with its own tsconfig.json This is because the cra scripts force the following settings in the tsconfig:
  "module": "esnext",
  "noEmit": true
  These settings cannot be used if using project references. You can change these settings but the next time you run npm(or yarn) start for the client the cra scripts modify tsconfig file of the client to set them back (if you miss the message on start that says its doing this, its gets confusing/frustrating fast). However, the cra sripts only modify the client's top level tsconfig. The config within the shared folder is left alone and can be set to support project reference.

- To get nodemon to restart on changes to share.ts, a nodemon config entry is added to the package.json of the server to add watching the shared folder.

- Root dir cannot be set in the tsconfig of the server or you'll get errors trying to import code (shared.ts) from outside rootDir. Just set in top tsconfig.

- In order to use tsc -b to build a lib (if desired) it is necessary to have the line "files":[] in the top tsconfig, otherwise it will attempt to build node modules
