import styled from "styled-components";

export const InnerMenuItem = styled.div`
         position: relative;
         display: flex;
         align-items: center;
         padding: 8px 2px 8px 15px;
          height: 45px;
         cursor: pointer;
         outline: none;

         .side-icon {
           margin-right: 10px;
           width: 30px;
         }
         &.active {
           background: white;
           color: black;
         }

         .item-content {
           flex-grow: 1;
           flex-shrink: 1;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
         }
         &.toggled {
           padding-left: 9px;
         }
       `;

export const InnerMenuLi = styled.li`
         list-style: none;
         margin: 10px 15px;
         &.toggled {
           position: relative;
           margin-top: 0px;
           margin-bottom: 0px;
           &::before {
             content: "";
             display: inline-block;
             position: absolute;
             top: 0;
             bottom: 0;
             left: 0;
             right: 0;
             cursor: pointer;
           }
         }
         i {
          padding:0 6px;
         }
       `;       
