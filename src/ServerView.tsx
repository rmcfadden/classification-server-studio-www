import { Component } from "solid-js";
import { ServerTree } from "./ServerTree";

export const ServerView: Component = () => (
  <div class="flex flex-col h-full bg-red-300 ">
    <div class="flex flex-1 h-full">
      <ServerTree />
    </div>
    <div class="flex h-20">asdfasd11</div>
  </div>
);
