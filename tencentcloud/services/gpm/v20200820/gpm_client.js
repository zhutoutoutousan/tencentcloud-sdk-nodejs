"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * gpm client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("gpm.tencentcloudapi.com", "2020-08-20", clientConfig);
    }
    /**
     * 取消匹配。
     */
    async CancelMatching(req, cb) {
        return this.request("CancelMatching", req, cb);
    }
    /**
     * 查询匹配进度。
     */
    async DescribeMatchingProgress(req, cb) {
        return this.request("DescribeMatchingProgress", req, cb);
    }
    /**
     * 创建匹配
     */
    async CreateMatch(req, cb) {
        return this.request("CreateMatch", req, cb);
    }
    /**
     * 修改匹配
     */
    async ModifyMatch(req, cb) {
        return this.request("ModifyMatch", req, cb);
    }
    /**
     * 查询规则详情
     */
    async DescribeRule(req, cb) {
        return this.request("DescribeRule", req, cb);
    }
    /**
     * 查询匹配详情
     */
    async DescribeMatch(req, cb) {
        return this.request("DescribeMatch", req, cb);
    }
    /**
     * 删除规则
     */
    async DeleteRule(req, cb) {
        return this.request("DeleteRule", req, cb);
    }
    /**
     * 删除匹配
     */
    async DeleteMatch(req, cb) {
        return this.request("DeleteMatch", req, cb);
    }
    /**
     * 分页查询规则集列表
     */
    async DescribeRules(req, cb) {
        return this.request("DescribeRules", req, cb);
    }
    /**
     * 修改规则（描述、标签）
     */
    async ModifyRule(req, cb) {
        return this.request("ModifyRule", req, cb);
    }
    /**
     * 创建规则
     */
    async CreateRule(req, cb) {
        return this.request("CreateRule", req, cb);
    }
    /**
     * 支持传入一个玩家或多个玩家发起匹配，在同一个请求内的玩家将被分到同一个对局。
     */
    async StartMatching(req, cb) {
        return this.request("StartMatching", req, cb);
    }
    /**
     * 分页查询匹配列表
     */
    async DescribeMatches(req, cb) {
        return this.request("DescribeMatches", req, cb);
    }
    /**
     * 分页查询匹配Code
     */
    async DescribeMatchCodes(req, cb) {
        return this.request("DescribeMatchCodes", req, cb);
    }
    /**
     * 统计数据
     */
    async DescribeData(req, cb) {
        return this.request("DescribeData", req, cb);
    }
}
exports.Client = Client;
