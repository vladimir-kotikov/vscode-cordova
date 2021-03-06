// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

import {CordovaDebugSession} from './cordovaDebugSession';
import {DebugSession} from 'vscode-debugadapter';

DebugSession.run(CordovaDebugSession);